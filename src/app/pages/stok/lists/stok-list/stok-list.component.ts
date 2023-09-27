import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { StokService } from 'src/app/core/services/stok/stok.service';

@Component({
  selector: 'app-stok-list',
  templateUrl: './stok-list.component.html',
  styleUrls: ['./stok-list.component.scss']
})
export class StokListComponent implements OnInit {

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
