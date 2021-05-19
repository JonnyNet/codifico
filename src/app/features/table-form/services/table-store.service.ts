import { Injectable } from '@angular/core';
import { Store } from 'src/app/shared/store/store';
import { GENRE } from '../mocks/genre';
import { Row } from '../models/row';
import { StateTable } from '../models/state-table';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TableStoreService extends Store<StateTable> {

  constructor() {
    super({
      data: [],
      genre: GENRE,
    });
  }

  addData(row: Row): void {
    const data = this.state.data.slice();
    data.push({
      ...row,
      genre: this.state.genre.filter(x => x.id === row.genre)[0].name,
      id: uuidv4(),
    });
    this.setState({
      ...this.state,
      data,
    });
  }

  deleteRow(id: string): void{
    const data = this.state.data.filter(x => x.id !== id);
    this.setState({
      ...this.state,
      data,
    });
  }
}
