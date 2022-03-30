import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { TestComponent } from './test/test.component';
import { CommonTableModule } from '../shared/common-table/common-table.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { ActionsButtonComponent } from '../shared/common-table/components/actions-button/actions-button.component';

@NgModule({
  declarations: [
    TestComponent,
    CategoryListComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    CommonTableModule
  ]
})
export class ModulesModule { }
