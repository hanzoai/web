// orders-store.d.ts
declare module '@/stores/orders-store' {
    import { IObservableArray } from 'mobx';
  
    export default class OrdersStore {
      query: string | undefined;
      searchTokens: Record<string, any>;
      page: number;
      display: number;
      total: number;
      orders: IObservableArray<any>;
      triggerNewSearch: boolean;
      sort: string | undefined;
      orderId: string | undefined;
      order: Record<string, any>;
      errors: Record<string, any>;
      isLoading: boolean;
  
      constructor(data: any, hanzoApi: any);
  
      refundOrder(id: string, amount: number): Promise<any>;
      getOrder(id: string): Promise<any>;
      updateOrder(): Promise<any>;
      createOrder(): Promise<any>;
      listOrders(page: number, display: number, query: any): Promise<any>;
    }
  }
  