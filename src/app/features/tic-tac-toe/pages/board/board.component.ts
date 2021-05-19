import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../../models/state';
import { TicTacToeStoreService } from '../../services/tic-tac-toe-store.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  state$!: Observable<State>;

  readonly boards = [
    Array.from({ length: 3 }, (i, v) => v),
    Array.from({ length: 3 }, (i, v) => v + 3),
    Array.from({ length: 3 }, (i, v) => v + 6),
  ];

  constructor(public service: TicTacToeStoreService) {
    this.state$ = this.service.state$;
  }

  ngOnInit(): void {
  }

}
