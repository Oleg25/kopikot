import {ItemListPage} from './item-list-page';

describe('Items page', function () {
  let page;

  beforeEach(() => {
    page = new ItemListPage();
  });

  it('should contains equal or more items than default ones', () => {
    ItemListPage.navigateTo();
    expect<any>(ItemListPage.getNumberItems()).toBeGreaterThanOrEqual(9);
  });
});
