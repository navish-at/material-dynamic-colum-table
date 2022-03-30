import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
columns = [
  { columnDef: 'name', header: 'Name' },
  { columnDef: 'company', header: 'Company' },

]
  dataStudent: any =[];
  constructor() { }

  ngOnInit(): void {
    this.dataStudent = [
      {
        "name": "test",
        "company": "z",
        
      },
      {
        "name": "stu",
        "company": "y",
        
      },
      {
        "name": "cstu",
        "company": "x",
        
      }
    ];
   
  }
  
  onTableAction(event:any) {
    console.log('event', event)
  }

}
