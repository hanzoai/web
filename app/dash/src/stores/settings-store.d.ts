// settings-store.d.ts
declare module '@/stores/settings-store' {
    import { IObservableArray } from 'mobx';

    export default class SettingsStore {
        lastChecked: string | undefined;
        countries: IObservableArray<any>;
        isLoading: boolean;

        constructor(data: any, hanzoApi: any);

        save(): void;
        load(): Promise<void>;

        readonly genderOptions: {
            male: string;
            female: string;
            unspecified: string;
            other: string;
        };

        readonly countryOptions: Record<string, string>;
        readonly stateOptions: Record<string, Record<string, string>>;
    }
}
