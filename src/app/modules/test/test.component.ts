import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
data:any = [];
nameSelect:any = [];
dataEmployee:any=[];
editButton:boolean = true;
columns = [
  { columnDef: 'name', header: 'Name' },
  { columnDef: 'company', header: 'Company' },
  { columnDef: 'city', header: 'City' },
  { columnDef: 'phone', header: 'Phone' },
]
  constructor() { }

  ngOnInit(): void {
    this.dataEmployee = [
     {
        "name": "f mep",
        "company": "u",
        "city": "ij",
        "phone": "10"
      },
      {
        "name": "g mep",
        "company": "t",
        "city": "kl",
        "phone": "9"
      },
      {
        "name": "h mep",
        "company": "s",
        "city": "mn",
        "phone": "8"
      },{
        "name": "i mep",
        "company": "r",
        "city": "op",
        "phone": "7"
      },{
        "name": "j mep",
        "company": "q",
        "city": "pq",
        "phone": "6"
      },{
        "name": "k mep",
        "company": "p",
        "city": "rs",
        "phone": "5"
      },
      {
        "name": "f mep",
        "company": "u",
        "city": "ij",
        "phone": "4"
      },
      {
        "name": "g mep",
        "company": "t",
        "city": "kl",
        "phone": "3"
      },
      {
        "name": "h mep",
        "company": "s",
        "city": "mn",
        "phone": "2"
      },{
        "name": "i mep",
        "company": "r",
        "city": "op",
        "phone": "1"
      }
    ];
  }

  // Get value for deleting and updating
  onTableAction(e:any) {
    console.log(e.event)
    console.log(e.data)
  }

 
}
