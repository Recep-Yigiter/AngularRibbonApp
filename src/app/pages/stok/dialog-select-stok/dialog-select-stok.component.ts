import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { StokService } from '../services/stok.service';
@Component({
  selector: 'app-dialog-select-stok',
  templateUrl: './dialog-select-stok.component.html',
  styleUrls: ['./dialog-select-stok.component.scss']
})
export class DialogSelectStokComponent implements OnInit {

  rows: any;
  pageIndex: number;
  pageSize: number;
  durum: boolean;
  dataSource: any;
  totalRecords: number;
  selectedStok: any;
  _selectedDataItem: any;
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
    private http: HttpClient,private StokService:StokService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }






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

    const allStoks= await this.StokService.GetListTreeView( () => console.log())
    this.dataSource = allStoks.data.items;
    this.totalRecords = allStoks.data.count;


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



  
  selectedDbClickStok(event) {
    this._selectedDataItem = event;
    if (this._selectedDataItem.durum==true) {
      this.dialogRef.close({ data: this._selectedDataItem })
    }
   
    
  }
}
