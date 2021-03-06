import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {APP_CONFIG, AppConfig} from '../../config/app.config';

import {SiteServiceService} from './site-service.service';

describe('SiteService', () => {
  let siteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        SiteServiceService
      ]
    });
    siteService = TestBed.get(SiteServiceService);
  });

  it('should contains sites', async(() => {
    siteService.getItems().subscribe((data: any) => {
      expect(data.length).toBeGreaterThan(9);
    });
  }));
});
