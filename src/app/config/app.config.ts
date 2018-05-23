import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    items: 'items'
  },
  endpoints: {
    items: 'https://api.bonusway.com/campaigns'
  },
  topItemsLimit: 10,
  repositoryURL: 'https://api.bonusway.com/campaigns'
};
