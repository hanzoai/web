'use client'

import { useLocalStore, useStaticRendering } from 'mobx-react'
import React, { createContext, type ReactNode } from 'react';

// Proprietary Libraries
import Api from '@/utils/hanzo/api'

// Constants
import { HANZO_ENDPOINT } from '@/utils/settings'

// Stores
import CredentialStore from '@/stores/credential-store'
import DashboardStore from '@/stores/dashboard-store'
import OrdersStore from '@/stores/orders-store'
import ProductsStore from '@/stores/products-store'
import SettingsStore from '@/stores/settings-store'
import UsersStore from '@/stores/users-store'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

let store: any = null

const defaultData = {
  credentialData: {},
  dashboardData: {},
  settingsData: {},
  userData: {},
  productData: {},
}

export const initStore = (data = defaultData) => {
  const api = new Api('', HANZO_ENDPOINT)

  if (isServer) {
    // Server stuff
    store = {
      credentialStore: new CredentialStore(data.credentialData, api),
      dashboardStore: new DashboardStore(data.dashboardData, api),
      settingsStore: new SettingsStore(data.settingsData, api),
      usersStore: new UsersStore(data.userData, api),
      productsStore: new ProductsStore(data.productData, api),
      ordersStore: new OrdersStore(data.productData, api),
    }
  } else if (!store) {
    // Client stuff
    store = {
      credentialStore: new CredentialStore(data.credentialData, api),
      dashboardStore: new DashboardStore(data.dashboardData, api),
      settingsStore: new SettingsStore(data.settingsData, api),
      usersStore: new UsersStore(data.userData, api),
      productsStore: new ProductsStore(data.productData, api),
      ordersStore: new OrdersStore(data.productData, api),
    }
  }

  // Otherwise we don't need to re-initialize the store
  return store
}

const StoreContext = createContext(null)

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const s = useLocalStore(initStore)
  return (
    <StoreContext.Provider value={s}>
      { children }
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const s = React.useContext(StoreContext)
  if (!s) {
    // this is especially useful in TypeScript so you don't need to
    // be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
