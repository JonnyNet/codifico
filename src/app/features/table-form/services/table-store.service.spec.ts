import { TestBed } from '@angular/core/testing';

import { TableStoreService } from './table-store.service';

describe('TableService', () => {
  let service: TableStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
