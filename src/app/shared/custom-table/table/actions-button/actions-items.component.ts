import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TableButtonAction } from '../const/tableButtonAction';
import { ActionItems } from './table';

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
      name: ActionItems.actionButton.edit,
      value: this.value,
    })
  }
  onDeleteClick() {
    this.buttonAction.emit({ name: ActionItems.actionButton.delete });
  }
  onViewClick() {
    this.buttonAction.emit({ name: ActionItems.actionButton.view });
  }

}
function editButton(editButton: any) {
  return true;
}

