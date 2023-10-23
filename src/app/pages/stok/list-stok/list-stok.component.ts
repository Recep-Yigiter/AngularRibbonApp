import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { StokService } from '../services/stok.service';

@Component({
  selector: 'app-list-stok',
  templateUrl: './list-stok.component.html',
  styleUrls: ['./list-stok.component.scss']
})
export class ListStokComponent implements OnInit {

  constructor(private StokService: StokService) { }

  ngOnInit(): void {
    this.getList()
  }

  dataSource: any;
  selectedItem: any;
  StokItem: any;
  totalHesap: any;


  testList: any[];
  async getList() {
    this.testList = []
    const list = await this.StokService.GetList();
    this.dataSource = list.data.items;
    this.dataSource.map(c=>c.ad).forEach(element => {
  
     this.testList.push({ad:element})

 
    });


  }
 

  onRowSelect(event: any) {
    this.StokItem = event.data;

  }
  onRowUnSelect() {
    this.StokItem = null
  }

































  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
