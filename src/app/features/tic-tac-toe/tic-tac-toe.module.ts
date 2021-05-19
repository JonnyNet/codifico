import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { SquareComponent } from './components/square/square.component';
import { BoardComponent } from './pages/board/board.component';


@NgModule({
  declarations: [
    SquareComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule
  ]
})
export class TicTacToeModule { }
