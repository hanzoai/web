'use client'
import React, { createContext, useState, useContext, type ReactNode } from 'react';
import {
  createOrder as createOrderHelper,
  updateOrderPaymentInfo as updateOrderPaymentInfoHelper
} from './order'

interface PaymentPlan {
  plan: string;
  price: number;
  duration: string;
}

interface PaymentPlanContextProps {
  paymentPlan: PaymentPlan | null;
  setPaymentPlan: (plan: PaymentPlan) => void;
  createOrder: (email: string, name: string) => Promise<string | undefined>;
  updateOrderPaymentInfo: (orderId: string, paymentInfo: any) => Promise<void>;
}

const PaymentPlanContext = createContext<PaymentPlanContextProps | undefined>(undefined);

export const PaymentPlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan | null>(null);

  return (
    <PaymentPlanContext.Provider value={{ paymentPlan, setPaymentPlan, createOrder, updateOrderPaymentInfo }}>
      {children}
    </PaymentPlanContext.Provider>
  );
};

export const createOrder = async (email: string, name: string) => {
  const order = await createOrderHelper(email, name) // didn't want to have two levels of 'items'
  return order.id
}

export const updateOrderPaymentInfo = async (orderId: string, paymentInfo: any) => {
  updateOrderPaymentInfoHelper(orderId, paymentInfo)
}

export const usePaymentPlan = (): PaymentPlanContextProps => {
  const context = useContext(PaymentPlanContext);
  if (!context) {
    throw new Error('usePaymentPlan must be used within a PaymentPlanProvider');
  }
  return context;
};