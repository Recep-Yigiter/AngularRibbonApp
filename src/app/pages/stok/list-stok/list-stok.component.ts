import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { StokService } from '../services/stok.service';
import { StokUpdateModel } from '../models/stok-update-model';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogUpdateChildStokComponent } from '../dialog-update-child-stok/dialog-update-child-stok.component';

@Component({
  selector: 'app-list-stok',
  templateUrl: './list-stok.component.html',
  styleUrls: ['./list-stok.component.scss']
})
export class ListStokComponent implements OnInit {

  constructor(private StokService: StokService, private customDialogService: CustomDialogService) { }

  ngOnInit(): void {
    this.getList()
  }

  dataSource: any;
  selectedItem: any;
  StokItem: any;
  totalHesap: any;
  totalStok: any;


  testList: any[];
  async getList() {
    this.testList = []
    const list = await this.StokService.GetListTreeView();
    this.dataSource = list.data.items;
    this.totalStok = this.dataSource.length

  }


  onRowSelect(event: any) {
    this.StokItem = event.data;

  }
  onRowUnSelect() {
    this.StokItem = null
  }

  updateDialog() {

    this.customDialogService.smallDialog({
      componentType: DialogUpdateChildStokComponent,
      data: this.StokItem,
      afterClose: () => { this.getList() }
    })

  }































  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
