import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableButtonAction } from '../const/tableButtonAction';
import { ActionItems } from './action-items';

@Component({
  selector: '[app-actions-items]',
  templateUrl: './actions-items.component.html',
  styleUrls: ['./actions-items.component.scss']
})
export class ActionsItemsComponent  {
  valueAction: any;
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>();

  constructor() { 
  }
 
  //  Emitting data for edit
  onEditClick() {
    this.buttonAction.emit({
      name: ActionItems.actionItem.edit,
      value: this.valueAction,
    })
  };
  
  //  Emitting data for delete
  onDeleteClick() {
    this.buttonAction.emit({ name: ActionItems.actionItem.delete });
  };
  
  //  Emitting data for view
  onViewClick() {
    this.buttonAction.emit({ name: ActionItems.actionItem.view });
  };

}

