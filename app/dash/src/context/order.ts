import {
  getFirestore,
  collection,
  getDoc,
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

import firebaseApp from '@/utils/firebase-conf'

let dbInstance: Firestore | undefined = undefined

const getDBInstance = (name: string): Firestore => {
  if (!dbInstance) {
    dbInstance = getFirestore(firebaseApp, name)
  }
  return dbInstance
}

const options = {
  dbName: 'hanzo-commerce',
  ordersTable: 'orders',
  planTable: 'plans',
  subscriptionTable: 'subscriptions',
  customerTable: 'customers',
}

interface SavedOrder {
  email: string
  name: string
  // TODO: add shippingInfo type
  shippingInfo?: any
  paymentInfo?: any
  status: string
  timestamp: FieldValue
}

interface SavedSubscriptionPlan {
  subscriptionPlanId: string
  subscriptionPlanInfo: any
  status: string
  timestamp: FieldValue
}

interface SavedSubscription {
  subscriptionId: string
  subscriptionInfo: any
  status: string
  timestamp: FieldValue
}

interface SavedCustomer {
  customerId: string
  name?: string
  email: string
  timestamp: FieldValue
}


const createOrder = async (
  email: string,
  name?: string
): Promise<{
  success: boolean,
  error: any,
  id?: string,
}> => {

  let error: any | null = null
  const ordersRef = collection(getDBInstance(options.dbName), options.ordersTable)
  const orderId = `${email}-${new Date().toISOString()}`

  try {
    await setDoc(doc(ordersRef, orderId), {
      email,
      name: name ?? '',
      status: 'open',
      timestamp: serverTimestamp(),
    } satisfies SavedOrder)
    return { success: !error, error, id: orderId }
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const updateOrderPaymentInfo = async (
  orderId: string,
  paymentInfo: any,
): Promise<{
  success: boolean,
  error: any
}> => {

  let error: any | null = null
  const ordersRef = collection(getDBInstance(options.dbName), options.ordersTable)

  try {
    await setDoc(doc(ordersRef, orderId), {
      paymentInfo,
      timestamp: serverTimestamp(),
    }, { merge: true })
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const getSubscriptionPlan = async (
  subscriptionPlanId?: string
): Promise<{
  success: string,
  data: any
}> => {
  try {
    const planRef = collection(getDBInstance(options.dbName), options.planTable)
    const planSnap = await getDoc(subscriptionPlanId ? doc(planRef, subscriptionPlanId) : doc(planRef))
    if (planSnap.exists()) {
      return { success: "success", data: planSnap.data() }
    } else {
      console.log("No such document!")
      return { success: "empty", data: null }
    }
  } catch (e) {
    console.error('Error writing item document: ', e)
    return { success: "error", data: null }
  }
}

const createSubscriptionPlan = async (
  subscriptionPlanId: string,
  subscriptionPlanInfo: any
): Promise<{
  success: boolean,
  error: any,
  id?: string,
}> => {
  let error: any | null = null
  const subscriptionPlanRef = collection(getDBInstance(options.dbName), options.planTable)

  try {
    await setDoc(doc(subscriptionPlanRef, subscriptionPlanId), {
      subscriptionPlanId,
      subscriptionPlanInfo,
      status: 'open',
      timestamp: serverTimestamp(),
    } satisfies SavedSubscriptionPlan)
    return { success: !error, error, id: subscriptionPlanId }
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const updateSubscriptionPlan = async (
  subscriptionPlanId: string,
  subscriptionPlanInfo: any
): Promise<{
  success: boolean,
  error: any,
  id?: string,
}> => {
  let error: any | null = null
  const ordersRef = collection(getDBInstance(options.dbName), options.planTable)

  try {
    await setDoc(doc(ordersRef, subscriptionPlanId), {
      subscriptionPlanInfo,
      timestamp: serverTimestamp(),
    }, { merge: true })
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const deleteSubscriptionPlan = async (
  subscriptionPlanId: string
): Promise<{
  success: boolean,
  error: any,
}> => {
  let error: any | null = null
  const planRef = collection(getDBInstance(options.dbName), options.planTable)

  try {
    await deleteDoc(doc(planRef, subscriptionPlanId))
    return { success: !error, error}
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const getSubscription = async (
  subscriptionId?: string
): Promise<{
  success: string,
  data: any
}> => {
  try {
    const subscriptionRef = collection(getDBInstance(options.dbName), options.subscriptionTable)
    const subscriptionSnap = await getDoc(subscriptionId ? doc(subscriptionRef, subscriptionId) : doc(subscriptionRef))
    if (subscriptionSnap.exists()) {
      return { success: "success", data: subscriptionSnap.data() }
    } else {
      console.log("No such document!")
      return { success: "empty", data: null }
    }
  } catch (e) {
    console.error('Error writing item document: ', e)
    return { success: "error", data: null }
  }
}

const createSubscription = async (
  subscriptionId: string,
  subscriptionInfo: any
): Promise<{
  success: boolean,
  error: any,
}> => {
  let error: any | null = null
  const subscripRef = collection(getDBInstance(options.dbName), options.subscriptionTable)

  try {
    await setDoc(doc(subscripRef, subscriptionId), {
      subscriptionId: subscriptionId,
      subscriptionInfo,
      status: 'open',
      timestamp: serverTimestamp(),
    } satisfies SavedSubscription)
    return { success: !error, error}
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const updateSubscription = async (
  subscriptionId: string,
  subscriptionInfo: any
): Promise<{
  success: boolean,
  error: any,
}> => {
  let error: any | null = null
  const ordersRef = collection(getDBInstance(options.dbName), options.subscriptionTable)

  try {
    await setDoc(doc(ordersRef, subscriptionId), {
      subscriptionInfo,
      timestamp: serverTimestamp(),
    }, { merge: true })
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const deleteSubscription = async (
  subscriptionId: string
): Promise<{
  success: boolean,
  error: any,
}> => {
  let error: any | null = null
  const subscriptionRef = collection(getDBInstance(options.dbName), options.subscriptionTable)

  try {
    await deleteDoc(doc(subscriptionRef, subscriptionId))
    return { success: !error, error}
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const getCustomer = async (email?: string) => {
  try {
    const customerRef = collection(getDBInstance(options.dbName), options.customerTable)
    const customerSnap = await getDoc(email ? doc(customerRef, email) : doc(customerRef))
    if (customerSnap.exists()) {
      return { success: "success", data: customerSnap.data() }
    } else {
      console.log("No such document!")
      return { success: "empty", data: null }
    }
  } catch (e) {
    console.error('Error writing item document: ', e)
    return { success: "error", data: null }
  }
}

const createCustomer = async (
  customerId: string,
  email: string,
  name?: string
): Promise<{
  success: boolean,
  error: any,
  id?: string,
}> => {
  let error: any | null = null
  const customerRef = collection(getDBInstance(options.dbName), options.customerTable)

  try {
    await setDoc(doc(customerRef, email), {
      customerId,
      email,
      name: name ?? '',
      timestamp: serverTimestamp(),
    } satisfies SavedCustomer)
    return { success: !error, error, id: customerId }
  } catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const updateCustomer = async (
  customerId: string, 
  email: string, 
  name?: string,
  subscriptionId?: string,
  plan?: string
): Promise<{
  success: boolean,
  error: any,
}> => {
  let error: any | null = null
  const customerRef = collection(getDBInstance(options.dbName), options.customerTable)

  try {
    await setDoc(doc(customerRef, email), {
      customerId,
      name: name ?? '',
      subscriptionId: subscriptionId ?? '',
      plan: plan ?? '',
      timestamp: serverTimestamp(),
    }, { merge: true })
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

const deleteCustomer = async (
  email: string
): Promise<{
  success: boolean,
  error: any,
}> => {
  let error: any | null = null
  const customerRef = collection(getDBInstance(options.dbName), options.customerTable)

  try {
    await deleteDoc(doc(customerRef, email))
    return { success: !error, error}
  }
  catch (e) {
    console.error('Error writing item document: ', e)
    error = e
  }

  return { success: !error, error }
}

export {
  createOrder,
  updateOrderPaymentInfo,
  createCustomer,
  createSubscription,
  createSubscriptionPlan,
  updateCustomer,
  updateSubscription,
  updateSubscriptionPlan,
  deleteCustomer,
  deleteSubscription,
  deleteSubscriptionPlan,
  getSubscriptionPlan,
  getSubscription,
  getCustomer,
}