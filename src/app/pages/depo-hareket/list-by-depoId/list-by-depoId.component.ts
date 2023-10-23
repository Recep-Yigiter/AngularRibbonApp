import { Component, OnInit, Inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FaturaService } from '../../fatura/services/fatura.service';
import { HttpClient } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FaturaHareketService } from '../../fatura-hareket/services/fatura-hareket.service';

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
  selectedDepoHareket: any;
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

    private FaturaHareketService: FaturaHareketService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }






  async ngOnInit() {
    this.getAllDepoHareket();
  }









  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalRecords = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllDepoHareket();
  }

  async getAllDepoHareket() {
    const list = await this.FaturaHareketService.GetList(() => { });

    this.dataSource = list.data.items.reduce((acc, item) => {
      if (this.data.id == item.depoId && item.faturaHareketTuruAdi == 'Stok') {
        acc.push(item);
      }
      return acc;
    }, []);

    var filtered = {};
    this.dataSource.forEach(d => {
      var x = filtered[d.stokId] || {};
      x = {
        id:d.stokId,
        faturaHareketTuruAdi: d.faturaHareketTuruAdi,
        stokAdi: d.stokAdi,
        stokKodu: d.stokKodu,
        birimAdi: d.birimAdi,
        giren:(x.giren || 0) + d.giren,
        cikan: (x.cikan || 0) + d.cikan,
      }
      filtered[d.stokId] = x;
    });
    this.dataSource = Object.keys(filtered).map(c => filtered[c]);

  }
  onpage(e: any) {
    this.pageIndex = e.first / e.rows;
    this.pageSize = e.rows
    this.rows = e.rows ? e.rows : 10;
    this.getAllDepoHareket();
  }
  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
  DepoHareketItem: any;
  async onRowSelect(event: any) {
    this.DepoHareketItem = event.data;


  }
  openAddDialog() {

  }



  selectedDbClickDepoHareket(event) {


  }
}
