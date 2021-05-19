import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input()
  id!: number;

  @Input()
  text!: string;

  @Output()
  clickEvent = new EventEmitter();

  clickAquare(): void {
    this.clickEvent.next({
      id: this.id,
      text: this.text
    });
  }
}
