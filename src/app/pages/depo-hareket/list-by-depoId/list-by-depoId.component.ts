import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FaturaService } from '../../fatura/services/fatura.service';
import { HttpClient } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-by-depoId',
  templateUrl: './list-by-depoId.component.html',
  styleUrls: ['./list-by-depoId.component.scss']
})
export class ListByDepoIdComponent implements OnInit {

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
    private http: HttpClient,private DepoService:FaturaService) { }






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
  openAddDialog() {
   
  }


  
  selectedDbClickDepo(event) {
    
    
  }
}
