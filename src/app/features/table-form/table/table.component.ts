import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Row } from '../models/row';
import { StateTable } from '../models/state-table';
import { TableStoreService } from '../services/table-store.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'year', 'genre', 'id'];
  dataSource!: MatTableDataSource<Row>;

  genre!: any[];

  form!: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public service: TableStoreService, build: FormBuilder) {
    this.service.state$.subscribe(state => {
      this.genre = state.genre;
      this.dataSource = new MatTableDataSource(state.data);
    });

    const validator = Validators.required;
    this.form = build.group({
      id: [''],
      title: ['', validator],
      year: ['', validator],
      genre: ['', validator],
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  save(): void {
    if (!this.form.valid) { return; }
    this.service.addData({ ...this.form.value });
    this.form.reset();
  }

}
