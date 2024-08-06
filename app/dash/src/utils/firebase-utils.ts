import {
    getFirestore,
    collection,
    getDoc,
    getDocs,
    setDoc,
    doc,
    serverTimestamp,
    type Firestore,
    type FieldValue,
    query,
    where,
    onSnapshot,
    deleteDoc,
} from 'firebase/firestore'

import firebaseApp from './firebase-conf'
import crypto from 'crypto'
import { error } from 'console'

let dbInstance: Firestore | undefined = undefined

const getDBInstance = (name: string): Firestore => {
    if (!dbInstance) {
        dbInstance = getFirestore(firebaseApp, name)
    }
    return dbInstance
}

const options = {
    dbName: 'hanzo-auth',
    organization: 'oraganizations',
    project: 'projects',
    invitations: 'invitations',
}

interface SavedOrganization {
    name: string
    owner: string
    createdAt: FieldValue
}

interface SavedProject {
    orgId: string,
    name: string,
    createdAt: FieldValue,
}

interface SavedInvitation {
    organizationId: string
    email: string
    role: string
    token: string
    createdAt: FieldValue
}

export const addOrganization = async (name: string, owner: string) => {
    const ref = collection(getDBInstance(options.dbName), options.organization)
    const id = crypto.randomBytes(20).toString('hex')

    try {
        await setDoc(doc(ref, id), {
            owner,
            name,
            createdAt: serverTimestamp(),
        } satisfies SavedOrganization)

        const memberRef = collection(ref, `${id}/members`)
        await setDoc(doc(memberRef, owner), {
            role: 'owner',
            createdAt: serverTimestamp(),
        })

        return { success: true, id }
    }
    catch (e) {
        console.error('Error writing item document: ', e)
        return { success: false, id: null }
    }
}

export const getOrganizationsByMember = async (memberEmail: string) => {
    const ref = collection(getDBInstance(options.dbName), options.organization);
    const querySnapshot = await getDocs(ref);

    const organizations = [];

    for (const docSnap of querySnapshot.docs) {
        const membersRef = collection(ref, `${docSnap.id}/members`);
        const memberDoc = await getDoc(doc(membersRef, memberEmail));

        if (memberDoc.exists()) {
            organizations.push({
                id: docSnap.id,
                name: docSnap.data().name,
                owner: docSnap.data().owner,
                role: memberDoc.data().role,
            }
            );
        }
    }

    if (organizations.length > 0) {
        return { success: true, data: organizations };
    } else {
        console.log("No organizations found for this member!");
        return { success: false, data: [] };
    }
}

export const getOrganizationByName = async (organizationName: string) => {
    const ref = collection(getDBInstance(options.dbName), options.organization);
    const q = query(ref, where("name", "==", organizationName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        return { success: true, data: { ...docSnap.data(), organizationId: docSnap.id } };
    } else {
        console.log("No such document!");
        return { success: false, data: null };
    }
}

export const leaveTeam = async (organizationId: string, email: string) => {
    const memberRef = doc(getDBInstance(options.dbName), `${options.organization}/${organizationId}/members`, email);

    try {
        await deleteDoc(memberRef);
        return { success: true };
    } catch (e) {
        console.error('Error removing member document: ', e);
        return { success: false };
    }
}

export const deleteTeam = async (organizationId: string) => {
    const db = getDBInstance(options.dbName);
    const orgRef = doc(db, options.organization, organizationId);
    const membersRef = collection(orgRef, 'members');
    const projectsRef = collection(db, options.project);

    try {
        // Delete all members of the organization
        const membersSnapshot = await getDocs(membersRef);
        for (const memberDoc of membersSnapshot.docs) {
            await deleteDoc(memberDoc.ref);
        }

        // Delete all projects of the organization
        const projectsQuery = query(projectsRef, where("orgId", "==", organizationId));
        const projectsSnapshot = await getDocs(projectsQuery);
        for (const projectDoc of projectsSnapshot.docs) {
            await deleteDoc(projectDoc.ref);
        }

        // Delete the organization document
        await deleteDoc(orgRef);

        return { success: true, error: null };
    } catch (e) {
        console.error('Error deleting team: ', e);
        return { success: false, error: e };
    }
}

export const inviteTeamMember = async (organization: string, email: string, role: string) => {
    const organizationSnapData = await getOrganizationByName(organization)
    if (!organizationSnapData.success || !organizationSnapData.data) {
        return { success: false, id: null, token: null }
    }
    const organizationId = organizationSnapData.data.organizationId

    const token = crypto.randomBytes(40).toString('hex')

    const ref = collection(getDBInstance(options.dbName), options.invitations)
    const id = crypto.randomBytes(20).toString('hex')

    try {
        await setDoc(doc(ref, id), {
            organizationId,
            email,
            role,
            token,
            createdAt: serverTimestamp(),
        } satisfies SavedInvitation)

        return { success: true, id, token: token }
    }
    catch (e) {
        console.error('Error writing item document: ', e)
        return { success: false, id: null, token: null }
    }
}

export const getInvitation = async (token: string) => {
    const ref = collection(getDBInstance(options.dbName), options.invitations)
    const q = query(ref, where("token", "==", token))
    const querySnapshot = await getDocs(q)
    
    console.log('token: ', token)
    console.log("querysnampshot: ", querySnapshot)

    if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0]
        const { organizationId, email, role } = docSnap.data()

        console.log(organizationId, email, role)

        const memberRef = collection(getDBInstance(options.dbName), `${options.organization}/${organizationId}/members`)
        await setDoc(doc(memberRef, email), {
            role,
            createdAt: serverTimestamp(),
        })

        const orgRef = doc(getDBInstance(options.dbName), options.organization, organizationId)
        const orgDoc = await getDoc(orgRef)

        console.log('orgDoc: ', orgDoc)

        if (orgDoc.exists()) {
            const organizationData = orgDoc.data()

            console.log(organizationData.name)

            return {
                success: true,
                error: null,
                data: {
                    organizationId,
                    organizationName: organizationData.name,
                    organizationOwner: organizationData.owner,
                    role
                }
            }
        } else {
            console.log("Organization document not found!")
            return { success: false, error: 'Organization document not found!', data: null }
        }
    } else {
        console.log("No such document!")
        return { success: false, error: 'No such document!', data: null }
    }
}

export const createProject = async (name: string, orgId: string) => {
    const ref = collection(getDBInstance(options.dbName), options.project)
    const id = crypto.randomBytes(20).toString('hex')

    try {
        await setDoc(doc(ref, id), {
            orgId,
            name,
            createdAt: serverTimestamp(),
        } satisfies SavedProject)

        return { success: true, error: null, id }
    }
    catch (e) {
        console.error('Error writing item document: ', e)
        return { success: false, error: e, id: null }
    }
}

export const getProjectsByOrgId = async (orgId: string) => {
    const ref = collection(getDBInstance(options.dbName), options.project);
    const q = query(ref, where("orgId", "==", orgId));
    const querySnapshot = await getDocs(q);

    const projects: { id: string, name: string }[] = [];

    querySnapshot.forEach((doc) => {
        projects.push({
            id: doc.id,
            name: doc.data().name,
        });
    });

    if (projects.length > 0) {
        return { success: true, data: projects };
    } else {
        console.log("No projects found for this organization!");
        return { success: false, data: [] };
    }
}

export const getProjectsByName = async (organizationName: string) => {
    const ref = collection(getDBInstance(options.dbName), options.organization);
    const q = query(ref, where("name", "==", organizationName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        return { success: true, data: { ...docSnap.data(), organizationId: docSnap.id } };
    } else {
        console.log("No such document!");
        return { success: false, data: null };
    }
}

export const getProjectById = async (projectId: string) => {
    try {
        const ref = doc(getDBInstance(options.dbName), options.project, projectId)
        const docSnap = await getDoc(ref)
        if (docSnap.exists()) {
            return {
                success: true,
                data: {
                    id: docSnap.id,
                    name: docSnap.data().name as string,
                    orgId: docSnap.data().orgId as string
                },
                error: null
            }
        } else {
            console.log("No such document!")
            return { success: false, error: 'no such document', data: null }
        }
    } catch (e) {
        console.error('Error writing item document: ', e)
        return { success: false, error: e, data: null }
    }
}

export const deleteProjectById = async (projectId: string) => {
    const ref = doc(getDBInstance(options.dbName), options.project, projectId)
    try {
        await deleteDoc(ref)
        return { success: true, error: null }
    }
    catch (e) {
        console.error('Error writing item document: ', e)
        return { success: false, error: e }
    }
}

