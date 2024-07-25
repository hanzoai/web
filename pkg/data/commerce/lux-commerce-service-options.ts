import type { ServiceOptions } from '@hanzo/commerce'

export default {
  dbName: 'lux-commerce',
  ordersTable: 'orders',
  localStorageKey: 'lux-cart'
} satisfies ServiceOptions
