import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { TezgahService } from '../services/tezgah.service';


@Component({
  selector: 'app-dialog-select-tezgah',
  templateUrl: './dialog-select-tezgah.component.html',
  styleUrls: ['./dialog-select-tezgah.component.scss']
})
export class DialogSelectTezgahComponent implements OnInit {

  rows: any;
  pageIndex: number;
  pageSize: number;
  durum: boolean;
  dataSource: any;
  totalRecords: number;
  selectedTezgah: any;
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
    private http: HttpClient,private TezgahService:TezgahService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }






  async ngOnInit() {

    this.getAllTezgah();

  }









  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllTezgah();
  }

  async getAllTezgah() {

    const allTezgahs= await this.TezgahService.GetList( () => console.log())
    this.dataSource = allTezgahs.data.items;
    this.totalRecords = allTezgahs.data.count;


  }
  onpage(e: any) {
    this.pageIndex = e.first / e.rows;
    this.pageSize = e.rows
    this.rows = e.rows ? e.rows : 10;
    this.getAllTezgah();
  }
  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
  TezgahItem: any;
  async onRowSelect(event: any) {
    this.TezgahItem = event.data;


  }



  
  selectedDbClickTezgah(event) {
    this._selectedDataItem = event;
    this.dialogRef.close({ data: this._selectedDataItem })
   
    
  }
}
