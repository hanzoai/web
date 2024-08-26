declare module '@/utils/blueprints' {
    type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';
  
    interface Blueprint {
      url: string | ((x: any) => string);
      method: HttpMethod;
      expects?: (res: Response) => boolean;
    }
  
    interface Blueprints {
      [key: string]: {
        [key: string]: Blueprint | Blueprints;
      };
    }
  
    const blueprints: Blueprints;
  
    export default blueprints;
  }