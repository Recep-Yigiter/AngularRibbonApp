import { Component, OnInit } from '@angular/core';
import { DepoService } from '../services/depo.service';
import { DepoDialogService } from '../services/depo-dialog.service';

@Component({
  selector: 'app-list-depo',
  templateUrl: './list-depo.component.html',
  styleUrls: ['./list-depo.component.scss']
})
export class ListDepoComponent implements OnInit {

  constructor(private DepoService: DepoService, private depoDialogService: DepoDialogService) { }

  ngOnInit(): void {
    this.getList()
  }

  dataSource: any;
  selectedItem: any;
  DepoItem: any;
  totalHesap: any;


  testList: any[];
  async getList() {
    this.testList = []
    const list = await this.DepoService.GetList();
    this.dataSource = list.data.items;
    this.dataSource.map(c => c.ad).forEach(element => {

      this.testList.push({ ad: element })


    });


  }


  onRowSelect(event: any) {
    this.DepoItem = event.data;

  }
  onRowUnSelect() {
    this.DepoItem = null
  }

  dblclickDepo(item) {
    this.depoDialogService.ListByDepoId(item,() => { })
  }































  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
