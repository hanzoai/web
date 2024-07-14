'use server'

import { 
  getFirestore, 
  collection, 
  setDoc, 
  doc, 
  serverTimestamp,
  type Firestore,
} from 'firebase/firestore'

import firebaseApp from './firebase-app'
import type { ContactInfo } from '../types'

let dbInstance: Firestore | undefined = undefined

const getDBInstance = (name: string): Firestore => {
  if (!dbInstance) {
    dbInstance = getFirestore(firebaseApp, name) 
  }
  return dbInstance  
}

const storeContact = async ( formData: ContactInfo, enclosure: any ) => {
  const email = formData.email
  const phone = formData.phone
  const dbName = enclosure?.dbId
  const tableName = enclosure?.listId

  let error: any | null = null
  const tableRef = collection(getDBInstance(dbName), tableName)

  try {
    await setDoc(doc(tableRef, email), {
      email,
      phone,
      timestamp: serverTimestamp(),
    })
    return { success: !error, error, id: email }
  }
  catch (e) {  
    console.error('Error writing contact info to database: ', e)
    error = e  
  }  
  
  return { success: !error, error }  
}

export {
  storeContact as default
}
