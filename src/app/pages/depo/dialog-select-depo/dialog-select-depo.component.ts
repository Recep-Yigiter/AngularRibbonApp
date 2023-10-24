import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DepoService } from '../services/depo.service';
import { HttpClient } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
@Component({
  selector: 'app-dialog-select-depo',
  templateUrl: './dialog-select-depo.component.html',
  styleUrls: ['./dialog-select-depo.component.scss']
})
export class DialogSelectDepoComponent implements OnInit {

  rows: any;
  pageIndex: number;
  pageSize: number;
  durum: boolean;
  dataSource: any;
  totalRecords: number;
  selectedDepo: any;
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
    private http: HttpClient,
    private DepoService:DepoService,
    private customDialogService:CustomDialogService
    ) { }






  async ngOnInit() {
    this.getAllDepo();

  }









  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllDepo();
  }

  async getAllDepo() {

    const allDepos= await this.DepoService.GetList( () => console.log())
    this.dataSource = allDepos.data.items;
    this.totalRecords = allDepos.data.count;


  }
  onpage(e: any) {
    this.pageIndex = e.first / e.rows;
    this.pageSize = e.rows
    this.rows = e.rows ? e.rows : 10;
    this.getAllDepo();
  }
  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
  DepoItem: any;
  async onRowSelect(event: any) {
    this.DepoItem = event.data;


  }

  selectedDbClickDepo(event) {
    this._selectedDataItem = event;
    this.dialogRef.close({ data: this._selectedDataItem })
    
  }
}
