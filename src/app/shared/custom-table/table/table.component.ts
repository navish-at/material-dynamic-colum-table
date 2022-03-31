import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import Swal from "sweetalert2";
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
  @Output() action: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();
  @ViewChild(MatSort, { static: true }) sort: any = MatSort;
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  objEmit: any = {};
  dataSource: any;
  displayedColumns: string[] = [];

  constructor() {}

  ngOnInit(): void {
    // Set table columns
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x: any) => x.columnDef)
    );

    // Add heading action
    this.displayedColumns.push("action");

    // For pagination, sorting and filter
    this.dataSource = new MatTableDataSource<any>(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // Get value of action element(button)
  onTableAction(e: any, data: any): void {
    // Edit
    if (e.name == "edit") {
      this.objEmit = { event: e, data: data };
      this.action.emit(this.objEmit);
    }
    // Delete
    else if (e.name == "delete") {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        cancelButtonColor: "#d33",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.objEmit = { event: e, data: data };
          this.action.emit(this.objEmit);
        }
      });
    }
    // View
    else if (e.name == "view") {
      this.objEmit = { event: e, data: data };
      this.action.emit(this.objEmit);
    }
  }

  // For filter
  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
