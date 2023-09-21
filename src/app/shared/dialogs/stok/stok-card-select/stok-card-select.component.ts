import { Component, OnInit } from '@angular/core';
import { StokCardAddComponent } from '../stok-card-add/stok-card-add.component';
import { PageEvent } from '@angular/material/paginator';

import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { StokService } from 'src/app/core/services/stok/stok.service';

@Component({
  selector: 'app-stok-card-select',
  templateUrl: './stok-card-select.component.html',
  styleUrls: ['./stok-card-select.component.scss']
})
export class StokCardSelectComponent implements OnInit {
  rows: any;
  pageIndex: number;
  pageSize: number;
  durum: boolean;
  dataSource: any;
  totalRecords: number;
  selectedStok: any;
  _selectedDataItem: any;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  pageSizeOptions = [5, 10, 15];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent: PageEvent;
  paginationDisabled: boolean = false;
  constructor(
    private dialog: MatDialog,
    private dialogRef: DialogRef,
    private http: HttpClient,private StokService:StokService) { }






  async ngOnInit() {
    this.getAllStok();

  }









  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllStok();
  }

  async getAllStok() {

    const allStoks= await this.StokService.GetList( () => console.log())
    this.dataSource = allStoks.items;
    this.totalRecords = allStoks.count;


  }
  onpage(e: any) {
    this.pageIndex = e.first / e.rows;
    this.pageSize = e.rows
    this.rows = e.rows ? e.rows : 10;
    this.getAllStok();
  }
  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
  StokItem: any;
  async onRowSelect(event: any) {
    this.StokItem = event.data;


  }
  openAddDialog() {
    const dialogRef = this.dialog.open(StokCardAddComponent, {
      width: '25%',
      minWidth: '350px',
      height: '38vh',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllStok();

    });
  }


  
  selectedDbClickStok(event) {
    this._selectedDataItem = event;
    this.dialogRef.close({ data: this._selectedDataItem })
    
  }
}
