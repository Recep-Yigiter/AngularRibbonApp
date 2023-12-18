import { Component, OnInit } from '@angular/core';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddOperasyonComponent } from '../dialog-add-operasyon/dialog-add-operasyon.component';
import { OperasyonService } from '../services/operasyon.service';

@Component({
  selector: 'app-list-operasyon',
  templateUrl: './list-operasyon.component.html',
  styleUrls: ['./list-operasyon.component.scss']
})
export class ListOperasyonComponent implements OnInit {

  constructor(
    private customDialogService: CustomDialogService,
    private operasyonService: OperasyonService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }



  dataSource: any;
  selectedItem: any;
  onRowSelect(event: any) {
    this.selectedItem = event.data;

  }


  onRowUnSelect() {
    this.selectedItem = null
  }


  async getAll() {
    this.dataSource = (await this.operasyonService.GetList()).data.items;
  }


  createOperasyon() {
    this.customDialogService.smallDialog({
      componentType: DialogAddOperasyonComponent,
      afterClose: () => { this.getAll() }
    })
  }


  deleteOperasyon(){
    this.customDialogService.deleteDialog(() => {
      this.operasyonService.delete(this.selectedItem.id, () => { this.getAll() });
    })
  }




  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
