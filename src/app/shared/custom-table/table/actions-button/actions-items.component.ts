import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TableButtonAction } from 'src/app/shared/models/tableButtonAction';
import { TableConsts } from './conts/table';

@Component({
  selector: '[app-actions-items]',
  templateUrl: './actions-items.component.html',
  styleUrls: ['./actions-items.component.scss']
})
export class ActionsItemsComponent  {

  constructor() { }

  @Input() value: any;
  
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>();

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    })
  }
  onDeleteClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.delete });
  }
  onViewClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.view });
  }

}
function editButton(editButton: any) {
  return true;
}
