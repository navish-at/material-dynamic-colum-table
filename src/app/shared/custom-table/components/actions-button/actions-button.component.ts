import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TestComponent } from 'src/app/modules/test/test.component';
import { TableButtonAction } from 'src/app/shared/models/tableButtonAction';
import { TableConsts } from './conts/table';

@Component({
  selector: '[app-actions-button]',
  templateUrl: './actions-button.component.html',
  styleUrls: ['./actions-button.component.scss']
})
export class ActionsItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() value: any;
  
  // ------
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    })
  }
  onDeleteClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.delete })
  }
  onViewClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.view })
  }

}
function editButton(editButton: any) {
  return true;
}

