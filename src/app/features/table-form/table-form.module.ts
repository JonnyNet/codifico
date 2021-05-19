import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableFormRoutingModule } from './table-form-routing.module';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { getDutchPaginatorIntl } from 'src/app/shared/providers/dutch-paginator-intl';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableFormRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }]
})
export class TableFormModule { }
