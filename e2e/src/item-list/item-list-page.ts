import {browser, by, element} from 'protractor';
import {AppConfig} from '../../../src/app/config/app.config';

export class ItemListPage {
  static navigateTo(): any {
    return browser.get(AppConfig.routes.items);
  }

  static getNumberItems(): any {
    return element.all(by.css('.list-item')).count();
  }
}
