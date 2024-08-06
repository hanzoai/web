'use client'
import React, { createContext, useState, useContext, type ReactNode } from 'react';
import {
  createOrder as createOrderHelper,
  updateOrderPaymentInfo as updateOrderPaymentInfoHelper,
  getCustomer as getCustomerHelper,
  createCustomer as createCustomerHelper,
  updateCustomer as updateCustomerHelper,
  getSubscriptionPlan as getSubscriptionPlanHelper,
  createSubscriptionPlan as createSubscriptionPlanHelper,
  updateSubscriptionPlan as updateSubscriptionPlanHelper,
  getSubscription as getSubscriptionHelper,
  createSubscription as createSubscriptionHelper,
  updateSubscription as updateSubscriptionHelper,
  deleteSubscription as deleteSubscriptionHelper
} from './order'

interface PaymentPlan {
  plan: string
  price: number
  duration: string
  planId: string
  planVariationId: string
}

interface PaymentPlanContextProps {
  paymentPlan: PaymentPlan | null;
  setPaymentPlan: (plan: PaymentPlan) => void;
  createOrder: (email: string, name: string) => Promise<string | undefined>;
  updateOrderPaymentInfo: (orderId: string, paymentInfo: any) => Promise<void>;
  getCustomer: (customerId?: string) => Promise<any | undefined>;
  createCustomer: (customerId: string, email: string, name?: string) => Promise<boolean | undefined>;
  updateCustomer: (customerId: string, email: string, name?: string, subscriptionId?: string, plan?: string) => Promise<boolean | undefined>;
  getSubscriptionPlan: (subscriptionPlanId?: string) => Promise<any | undefined>;
  createSubscriptionPlan: (subscriptionPlanId: string, subscriptionPlanInfo: any) => Promise<boolean | undefined>;
  updateSubscriptionPlan: (subscriptionPlanId: string, subscriptionPlanInfo: any) => Promise<boolean | undefined>;
  getSubscription: (subscriptionId?: string) => Promise<any | undefined>;
  createSubscription: (subscriptionId: string, subscriptionInfo: any) => Promise<boolean | undefined>;
  updateSubscription: (subscriptionId: string, subscriptionInfo: any) => Promise<boolean | undefined>;
  deleteSubscription: (subscriptionId: string) => Promise<boolean | undefined>;
}

const PaymentPlanContext = createContext<PaymentPlanContextProps | undefined>(undefined);

export const PaymentPlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan | null>(null);

  return (
    <PaymentPlanContext.Provider value={{
      paymentPlan,
      setPaymentPlan,
      createOrder,
      updateOrderPaymentInfo,
      getSubscriptionPlan,
      createSubscriptionPlan,
      updateSubscriptionPlan,
      getSubscription,
      createSubscription,
      updateSubscription,
      deleteSubscription,
      getCustomer,
      createCustomer,
      updateCustomer,
    }}>
      {children}
    </PaymentPlanContext.Provider>
  );
};

export const createOrder = async (email: string, name: string) => {
  const order = await createOrderHelper(email, name) // didn't want to have two levels of 'items'
  return order.id
}

export const updateOrderPaymentInfo = async (orderId: string, paymentInfo: any) => {
  await updateOrderPaymentInfoHelper(orderId, paymentInfo)
}

export const getCustomer = async (email?: string) => {
  const customer = await getCustomerHelper(email)
  if (customer.success == "success")
    return customer.data
  else return null
}

export const createCustomer = async (customerId: string, email: string, name?: string) => {
  const customer = await createCustomerHelper(customerId, email, name)
  if (customer.success)
    return true
  else return false
}

export const updateCustomer = async (customerId: string, email: string, name?: string, subscriptionId?: string, plan?: string) => {
  const customer = await updateCustomerHelper(customerId, email, name, subscriptionId, plan)
  if (customer.success)
    return true
  else return false
}

export const getSubscriptionPlan = async (subscriptionPlanId?: string) => {
  const subscriptionPlan = await getSubscriptionPlanHelper(subscriptionPlanId)
  if (subscriptionPlan.success)
    return subscriptionPlan.data
  else return null
}

export const createSubscriptionPlan = async (subscriptionPlanId: string, subscriptionPlanInfo: any) => {
  const subscriptionPlan = await createSubscriptionPlanHelper(subscriptionPlanId, subscriptionPlanInfo)
  if (subscriptionPlan.success)
    return true
  else return false
}

export const updateSubscriptionPlan = async (subscriptionPlanId: string, subscriptionPlanInfo: any) => {
  const subscriptionPlan = await updateSubscriptionPlanHelper(subscriptionPlanId, subscriptionPlanInfo)
  if (subscriptionPlan.success)
    return true
  else return false
}

export const getSubscription = async (subscriptionId?: string) => {
  const subscription = await getSubscriptionHelper(subscriptionId)
  if (subscription.success)
    return subscription.data
  else return null
}

export const createSubscription = async (subscriptionId: string, subscriptionInfo: any) => {
  const subscription = await createSubscriptionHelper(subscriptionId, subscriptionInfo)
  if (subscription.success)
    return true
  else return false
}

export const updateSubscription = async (subscriptionId: string, subscriptionInfo: any) => {
  const updatedSubscription = await updateSubscriptionHelper(subscriptionId, subscriptionInfo)
  if (updatedSubscription.success)
    return true
  else return false
}

export const deleteSubscription = async (subscriptionId: string) => {
  const res = await deleteSubscriptionHelper(subscriptionId)
  if (res.success)
    return true
  else return false
}

export const usePaymentPlan = (): PaymentPlanContextProps => {
  const context = useContext(PaymentPlanContext);
  if (!context) {
    throw new Error('usePaymentPlan must be used within a PaymentPlanProvider');
  }
  return context;
};