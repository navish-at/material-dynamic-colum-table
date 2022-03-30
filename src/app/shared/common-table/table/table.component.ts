import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { SelectionModel } from '@angular/cdk/collections';



// export interface data {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
// export class TableComponent implements OnInit, AfterViewInit {
export class TableComponent implements OnInit {
  // @Input() data: any = [];
  // @Input() showPagination: boolean = false;
  // @Input() showEdit:boolean = false;
  // @Input() showDelete: boolean =  false;
  // @Input() selectWeight: boolean = false;
  // @Input() selectName: boolean =  false;
  // @Input() searchData: boolean = false;
  // @Input() nameSelect:any = [];
  // @Input() name:any;
  // @Input() weight:string = '';
  // dataSource:any;
  // ----------------------------
  dataSource:any;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  
  value: string ='';
  @Input() columns: any= [];
  @Input() tableData: any = [];
  @ViewChild(MatSort, { static: true }) sort:any= MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator:any= MatPaginator;

  // ----------------------------
  constructor(private _liveAnnouncer: LiveAnnouncer) { 
  }

  ngAfterViewInit() {
    console.log(this.dataSource)
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    // set table columns
    this.displayedColumns = this.displayedColumns.concat(this.columns.map((x:any) => x.columnDef)); 

    // add paginator, sorting and filter
    this.dataSource =  new MatTableDataSource<any>(this.tableData);

    // paginator
    this.dataSource.paginator = this.paginator;
  }

  // for sorting
  announceSortChange(sortState: Sort) {
    console.log(sortState);
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      console.log(this._liveAnnouncer);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // Update 
  // update(e:any){
  //   console.log(e)
  // }

  // delete
  // delete(){    
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // ---------
  //       this.dataSource._data._value.splice(0,1)
  //       this.dataSource._data._value = this.dataSource._data._value;
  //       this.dataShow()
  //       // ---------
  //     }
  //   })
    
  // }

  // setName(e:any){
  //   this.name =  e.target.innerHTML;
  //   console.log(this.name)
  // }

  // setWeight(e:any){
  //   this.weight = e.target.innerHTML;
  //   console.log(this.weight);
  // }

  // --------------
  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    console.log(this.dataSource)
  }
  // --------------

}
