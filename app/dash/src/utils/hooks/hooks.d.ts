declare module '@/utils/useMidstream' {
    import { Dispatch, SetStateAction } from 'react';

    interface MidstreamConfig {
        // Define the shape of the midstream configuration object here
        [key: string]: any;
    }

    interface MidstreamOptions {
        dst?: { [key: string]: any } | ((name: string, value: any) => void);
        destination?: { [key: string]: any };
        err?: { [key: string]: any } | ((name: string, value: any) => void);
        errors?: { [key: string]: any };
    }

    interface Midstream {
        // Define the shape of the midstream object here
        [key: string]: any;
    }

    interface UseMidstreamReturn extends Midstream {
        dst: { [key: string]: any } | ((name: string, value: any) => void);
        errors: { [key: string]: any } | ((name: string, value: any) => void);
    }

    export function useMidstream(
        config: MidstreamConfig,
        opts: MidstreamOptions
    ): UseMidstreamReturn;

    export const foo: number;
}