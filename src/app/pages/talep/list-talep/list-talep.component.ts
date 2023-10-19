import { Component, OnInit } from '@angular/core';
import { TalepService } from '../services/talep.service';
import { TalepDialogService } from '../services/talep-dialog.service';

@Component({
  selector: 'app-list-talep',
  templateUrl: './list-talep.component.html',
  styleUrls: ['./list-talep.component.scss']
})
export class ListTalepComponent implements OnInit {

  constructor(private TalepService: TalepService,private TalepDialogService:TalepDialogService) { }

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
    const list = await this.TalepService.GetList();
    this.dataSource = list.data.items;



  }
 

  onRowSelect(event: any) {
    this.StokItem = event.data;

  }
  onRowUnSelect() {
    this.StokItem = null
  }


  dblclickTalep(item) {
    this.TalepDialogService.ListByTalepId(item,() => { })
   
  }






























  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
