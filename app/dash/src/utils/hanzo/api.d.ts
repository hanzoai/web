declare module '@/utils/hanzo/api' {
    import { IObservableValue, IComputedValue } from 'mobx';

    export default class Api {
        key: IObservableValue<string>;
        endpoint: IObservableValue<string>;

        constructor(key: string, endpoint: string);

        readonly client: IComputedValue<any>;
    }
}