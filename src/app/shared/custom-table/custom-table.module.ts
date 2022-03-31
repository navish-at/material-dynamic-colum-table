import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { MaterialModule } from './table/const/material.module';
import { ActionsItemsComponent } from './table/actions-button/actions-items.component';

@NgModule({
  declarations: [
    TableComponent,
    ActionsItemsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    TableComponent,
    ActionsItemsComponent
  ]
})
export class CustomTableModule { }
