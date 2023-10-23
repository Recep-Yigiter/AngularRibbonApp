import { Component, OnInit } from '@angular/core';
import { TalepService } from '../services/talep.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { TalepHareketComponent } from '../../talep-hareket/talep-hareket.component';
import { ListByTalepIdComponent } from '../../talep-hareket/list-by-talep-id/list-by-talepId.component';

@Component({
  selector: 'app-list-talep',
  templateUrl: './list-talep.component.html',
  styleUrls: ['./list-talep.component.scss']
})
export class ListTalepComponent implements OnInit {

  constructor(private TalepService: TalepService,
    private CustomDialogService: CustomDialogService
  ) { }

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
    // this.TalepDialogService.ListByTalepId(item,() => { })
    this.CustomDialogService.largeDialog({
      componentType: ListByTalepIdComponent,
      data:item,
    })
  }






























  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
