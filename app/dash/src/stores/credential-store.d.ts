declare module '@/stores/credential-store' {
    import { IObservableArray, IObservableValue, IComputedValue } from 'mobx';
  
    interface Errors {
      email: string;
      password: string;
    }
  
    export default class CredentialStore {
      user: IObservableValue<any>;
      orgs: IObservableArray<any>;
      org: IObservableValue<any>;
      integrations: IObservableArray<any>;
      activeOrg: IObservableValue<number>;
      isLoading: IObservableValue<boolean>;
      email: IObservableValue<string>;
      password: IObservableValue<string>;
      remember: IObservableValue<boolean>;
      errors: IObservableValue<Errors>;
  
      constructor(data: any, hanzoApi: any);
  
      save(): void;
      hasIntegration(type: string): boolean;
      setProperty(k: string, v: any): void;
      setError(k: string, v: any): void;
      load(): void;
      getOrg(): Promise<void>;
      login(username?: string, password?: string): Promise<void>;
      logout(): void;
  
      readonly orgStub: IComputedValue<any>;
      readonly isLoggedIn: IComputedValue<boolean>;
    }
  }