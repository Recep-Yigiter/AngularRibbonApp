import { Component, OnInit } from '@angular/core';
import { DialogAddTezgahComponent } from '../dialog-add-tezgah/dialog-add-tezgah.component';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { TezgahService } from '../services/tezgah.service';

@Component({
  selector: 'app-list-tezgah',
  templateUrl: './list-tezgah.component.html',
  styleUrls: ['./list-tezgah.component.scss']
})
export class ListTezgahComponent implements OnInit {

  constructor(
    private customDialogService: CustomDialogService,
    private TezgahService: TezgahService
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
    this.dataSource = (await this.TezgahService.GetList()).data.items;

  }


  createTezgah() {
    this.customDialogService.smallDialog({
      componentType: DialogAddTezgahComponent,
      afterClose: () => { this.getAll() }
    })
  }


  deleteTezgah(){
    this.customDialogService.deleteDialog(() => {
      this.TezgahService.delete(this.selectedItem.id, () => { this.getAll() });
    })
  }




  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
