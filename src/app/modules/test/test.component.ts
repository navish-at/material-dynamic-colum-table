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
        "phone": "6"
      },
      {
        "name": "g mep",
        "company": "t",
        "city": "kl",
        "phone": "5"
      },
      {
        "name": "h mep",
        "company": "s",
        "city": "mn",
        "phone": "4"
      },{
        "name": "i mep",
        "company": "r",
        "city": "op",
        "phone": "3"
      },{
        "name": "j mep",
        "company": "q",
        "city": "pq",
        "phone": "2"
      },{
        "name": "k mep",
        "company": "p",
        "city": "rs",
        "phone": "1"
      },
      {
        "name": "f mep",
        "company": "u",
        "city": "ij",
        "phone": "6"
      },
      {
        "name": "g mep",
        "company": "t",
        "city": "kl",
        "phone": "5"
      },
      {
        "name": "h mep",
        "company": "s",
        "city": "mn",
        "phone": "4"
      },{
        "name": "i mep",
        "company": "r",
        "city": "op",
        "phone": "3"
      },{
        "name": "j mep",
        "company": "q",
        "city": "pq",
        "phone": "2"
      },{
        "name": "k mep",
        "company": "p",
        "city": "rs",
        "phone": "1"
      },{
        "name": "f mep",
        "company": "u",
        "city": "ij",
        "phone": "6"
      },
      {
        "name": "g mep",
        "company": "t",
        "city": "kl",
        "phone": "5"
      },
      {
        "name": "h mep",
        "company": "s",
        "city": "mn",
        "phone": "4"
      },{
        "name": "i mep",
        "company": "r",
        "city": "op",
        "phone": "3"
      },{
        "name": "j mep",
        "company": "q",
        "city": "pq",
        "phone": "2"
      },{
        "name": "k mep",
        "company": "p",
        "city": "rs",
        "phone": "1"
      }
    ];
  }

  onTableAction(event:any) {
    console.log('event', event)
  }

 
}
