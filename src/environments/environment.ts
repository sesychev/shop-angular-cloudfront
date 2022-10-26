// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Config } from './config.interface';

export const environment: Config = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
