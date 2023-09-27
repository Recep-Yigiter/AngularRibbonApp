import { Component, OnInit } from '@angular/core';
import { BirimAddDialogComponent } from '../birim-add-dialog/birim-add-dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { BirimService } from 'src/app/core/services/birim/birim.service';
import { HttpClient } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-birim-select-dialog',
  templateUrl: './birim-select-dialog.component.html',
  styleUrls: ['./birim-select-dialog.component.scss']
})
export class BirimSelectDialogComponent implements OnInit {
  rows: any;
  pageIndex: number;
  pageSize: number;
  durum: boolean;
  dataSource: any;
  totalRecords: number;
  selectedBirim: any;
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
    private http: HttpClient,private BirimService:BirimService) { }






  async ngOnInit() {
    this.getAllBirim();

  }









  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllBirim();
  }

  async getAllBirim() {

    const allBirims= await this.BirimService.list( () => console.log())
    this.dataSource = allBirims.data.items;
    this.totalRecords = allBirims.data.count;


  }
  onpage(e: any) {
    this.pageIndex = e.first / e.rows;
    this.pageSize = e.rows
    this.rows = e.rows ? e.rows : 10;
    this.getAllBirim();
  }
  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
  BirimItem: any;
  async onRowSelect(event: any) {
    this.BirimItem = event.data;


  }
  openAddDialog() {
    const dialogRef = this.dialog.open(BirimAddDialogComponent, {
      width: '25%',
      minWidth: '350px',
      height: '38vh',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllBirim();

    });
  }


  
  selectedDbClickBirim(event) {
    this._selectedDataItem = event;
    this.dialogRef.close({ data: this._selectedDataItem })
    
  }
}
