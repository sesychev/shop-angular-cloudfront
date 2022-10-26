import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    //product: 'https://i8x8oumg0e.execute-api.eu-west-1.amazonaws.com/dev/',
    //order: 'https://i8x8oumg0e.execute-api.eu-west-1.amazonaws.com/dev/',
    //import: 'https://i8x8oumg0e.execute-api.eu-west-1.amazonaws.com/dev/',
    //import: 'https://.execute-api.eu-west-1.amazonaws.com/dev/import',
    //bff: 'https://i8x8oumg0e.execute-api.eu-west-1.amazonaws.com/dev/',
    //cart: 'https://i8x8oumg0e.execute-api.eu-west-1.amazonaws.com/dev/',
    /*
    product: 'https://201bq42047.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://8tu92szicf.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://201bq42047.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    */
    product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: false,
    bff: false,
    cart: false,
  },
};
