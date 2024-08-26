// users-store.d.ts
declare module '@/stores/users-store' {
    import { IObservableArray } from 'mobx';

    export default class UsersStore {
        query: string | undefined;
        searchTokens: Record<string, any>;
        page: number;
        display: number;
        total: number;
        users: IObservableArray<any>;
        triggerNewSearch: boolean;
        sort: string | undefined;
        userId: string | undefined;
        user: Record<string, any>;
        errors: Record<string, any>;
        isLoading: boolean;

        constructor(data: any, hanzoApi: any);

        getUser(id: string): Promise<any>;
        updateUser(): Promise<any>;
        createUser(): Promise<any>;
        listUsers(page: number, display: number, query: any): Promise<any>;
    }
}
