import { TestBed } from '@angular/core/testing';

import { TicTacToeStoreService } from './tic-tac-toe-store.service';

describe('TicTacToeStoreService', () => {
  let service: TicTacToeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicTacToeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
