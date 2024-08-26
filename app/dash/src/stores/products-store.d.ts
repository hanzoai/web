// products-store.d.ts
declare module '@/stores/products-store' {
    import { IObservableArray } from 'mobx';

    export default class ProductsStore {
        query: string | undefined;
        searchTokens: Record<string, any>;
        page: number;
        display: number;
        total: number;
        products: IObservableArray<any>;
        triggerNewSearch: boolean;
        sort: string | undefined;
        productId: string | undefined;
        product: Record<string, any>;
        errors: Record<string, any>;
        isLoading: boolean;

        constructor(data: any, hanzoApi: any);

        getProduct(id: string): Promise<any>;
        updateProduct(): Promise<any>;
        createProduct(): Promise<any>;
        listProducts(page: number, display: number, query: any): Promise<any>;
    }
}
