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
  obj: any = {};
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

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // Get value of action element(button)
  onTableAction(e: any, data: any): void {
    // Edit
    if (e.name == "edit") {
      this.obj = { event: e, data: data };
      this.action.emit(this.obj);
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
          this.obj = { event: e, data: data };
          this.action.emit(this.obj);
        }
      });
    }
    // View
    else if (e.name == "view") {
      this.obj = { event: e, data: data };
      this.action.emit(this.obj);
    }
  }

  // For filter
  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
