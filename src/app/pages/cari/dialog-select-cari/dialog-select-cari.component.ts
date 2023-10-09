import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CariService } from '../services/cari.service';

@Component({
  selector: 'app-dialog-select-cari',
  templateUrl: './dialog-select-cari.component.html',
  styleUrls: ['./dialog-select-cari.component.scss']
})
export class DialogSelectCariComponent implements OnInit {

  rows: any;
  pageIndex: number;
  pageSize: number;
  durum: boolean;
  dataSource: any;
  totalRecords: number;
  selectedCari: any;
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
    private http: HttpClient,private CariService:CariService) { }






  async ngOnInit() {
    this.getAllCari();

  }









  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllCari();
  }

  async getAllCari() {

    const allCaris= await this.CariService.GetList( () => console.log())
    this.dataSource = allCaris.data.items;
    this.totalRecords = allCaris.data.count;


  }
  onpage(e: any) {
    this.pageIndex = e.first / e.rows;
    this.pageSize = e.rows
    this.rows = e.rows ? e.rows : 10;
    this.getAllCari();
  }
  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
  CariItem: any;
  async onRowSelect(event: any) {
    this.CariItem = event.data;


  }
  openAddDialog() {
    const dialogRef = this.dialog.open(DialogSelectCariComponent, {
      width: '25%',
      minWidth: '350px',
      height: '38vh',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllCari();

    });
  }


  
  selectedDbClickCari(event) {
    this._selectedDataItem = event;
    this.dialogRef.close({ data: this._selectedDataItem })
    
  }
}
