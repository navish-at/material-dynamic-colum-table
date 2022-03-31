import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { MaterialModule } from './material.module';
import { ActionsItemsComponent } from './components/actions-button/actions-button.component';


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
