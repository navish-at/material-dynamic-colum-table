import { LiveAnnouncer } from "@angular/cdk/a11y";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import Swal from "sweetalert2";
import { SelectionModel } from "@angular/cdk/collections";
import { TableButtonAction } from "./const/tableButtonAction";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() showPagination: boolean = false;
  @Input() showSearch: boolean = false;
  @Input() columns: any = [];
  @Input() tableData: any = [];
  @ViewChild(MatSort, { static: true }) sort: any = MatSort;
  @Output() action: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();
  @ViewChild(MatPaginator, { static: true }) paginator: any = MatPaginator;
  dataSource: any;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value: string = "";
  
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    // Set table columns
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x: any) => x.columnDef)
    );

    // Add heading action
    this.displayedColumns.push("action");

    // For pagination, sorting and filter
    this.dataSource = new MatTableDataSource<any>(this.tableData);

    // Paginator
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // Get value of action element(button)
  onTableAction(e: any, data:any): void {
    this.action.emit(e);
    console.log(data);
    

    // localStorage.setItem('actionData',data)


    // Delete 
    if(e.name == 'delete'){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          // ---------
          console.log(this.dataSource._data._value);
          for (let i of this.dataSource._data._value) {
            if(data.phone === i.phone){
              this.dataSource._data._value.splice(0,1)
            }
          }
        }
      })
    }
  };

  /** Announce the change in sort state for assistive technology. */
  // This example uses English messages. If your application supports
  // multiple language, you would internationalize these strings.
  // Furthermore, you can customize the message to add additional
  // details about the values being sorted.
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  };

  // For filter
  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  };
}
