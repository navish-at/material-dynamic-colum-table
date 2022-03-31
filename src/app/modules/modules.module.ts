import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { TestComponent } from './test/test.component';
import { CustomTableModule } from '../shared/custom-table/custom-table.module';
import { CategoryListComponent } from './category-list/category-list.component';
@NgModule({
  declarations: [
    TestComponent,
    CategoryListComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    CustomTableModule
  ]
})
export class ModulesModule { }
