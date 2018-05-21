import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    items: 'items',
    error404: '404'
  },
  endpoints: {
    items: 'https://api.bonusway.com/campaigns?limit=2&offset=0'
  },
  topItemsLimit: 4,
  repositoryURL: 'https://api.bonusway.com/campaigns?limit=2&offset=0'
};
