import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material/material.module';
import { ActionsButtonComponent } from './components/actions-button/actions-button.component';


@NgModule({
  declarations: [
    TableComponent,
    ActionsButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    TableComponent,
    ActionsButtonComponent
  ]
})
export class CustomTableModule { }
