import { 
  getFirestore, 
  collection, 
  setDoc, 
  doc, 
  serverTimestamp,
  type Firestore,
  type FieldValue, 
} from 'firebase/firestore'  

import firebaseApp from './firebase' 

let dbInstance: Firestore | undefined = undefined

const getDBInstance = (name: string): Firestore => {
  if (!dbInstance) {
    dbInstance = getFirestore(firebaseApp, name) 
  }
  return dbInstance  
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

const options = {
  dbName: 'hanzo-commerce',
  ordersTable: 'orders',
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

export { createOrder, updateOrderPaymentInfo }