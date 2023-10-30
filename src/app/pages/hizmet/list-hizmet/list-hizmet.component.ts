import { Component, OnInit } from '@angular/core';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { HizmetService } from '../services/hizmet.service';

@Component({
  selector: 'app-list-hizmet',
  templateUrl: './list-hizmet.component.html',
  styleUrls: ['./list-hizmet.component.scss']
})
export class ListHizmetComponent implements OnInit {

  constructor(private HizmetService: HizmetService,private customDialogService: CustomDialogService) { }

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
    const list = await this.HizmetService.GetList();
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


  }































  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
