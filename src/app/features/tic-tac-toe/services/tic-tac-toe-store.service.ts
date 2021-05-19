import { Injectable } from '@angular/core';
import { Store } from 'src/app/shared/store/store';
import { Squere } from '../models/square';
import { State } from '../models/state';
import { TicTacToeService } from './tic-tac-toe.service';

const INIT = {
  squares: Array(9).fill(''),
  xIsNext: true,
  winner: false,
};

@Injectable({
  providedIn: 'root'
})
export class TicTacToeStoreService extends Store<State> {

  constructor(private service: TicTacToeService) {
    super(INIT);
  }

  handleClick(square: Squere): void {
    if (this.state.winner) { return; }
    const squares = this.state.squares.slice();
    squares[square.id] = this.state.xIsNext ? 'X' : 'O';
    const winner = this.service.calculateWinner(squares) !== '';
    const xIsNext = winner ? this.state.xIsNext : !this.state.xIsNext;
    this.setState({
      squares,
      xIsNext,
      winner,
    });
  }

  reset(): void {
    this.setState(INIT);
  }
}
