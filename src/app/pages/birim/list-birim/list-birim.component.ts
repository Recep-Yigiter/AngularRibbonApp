import { Component, OnInit } from '@angular/core';
import { BirimService } from 'src/app/core/services/birim/birim.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddBirimComponent } from '../dialog-add-birim/dialog-add-birim.component';
import { DialogUpdateBirimComponent } from '../dialog-update-birim/dialog-update-birim.component';

@Component({
  selector: 'app-list-birim',
  templateUrl: './list-birim.component.html',
  styleUrls: ['./list-birim.component.scss']
})
export class ListBirimComponent implements OnInit {
  dataSource: any;
  totalRecords: number;
  BirimItem: any;
  selectedItem: any;
  constructor(
    private BirimService: BirimService,
    private CustomerDialogService: CustomDialogService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }




  async getAll() {
    const getAll = await this.BirimService.list(() => {

    })

    this.dataSource = getAll.data.items


  }
  onRowSelect(event: any) {
    this.BirimItem = event.data;

  }
  onRowUnSelect() {
    this.BirimItem = null
  }

  addDialog() {
    this.CustomerDialogService.smallDialog({
      componentType: DialogAddBirimComponent,
      afterClose: () => { this.getAll() }
    })
  }
  updateDialog() {
    this.CustomerDialogService.smallDialog({
      componentType: DialogUpdateBirimComponent,
      afterClose: () => { this.getAll() }
    })
  }
  deleteDialog() {
    // this.birimDialogService.updateDialog(this.BirimItem,() => { this.getAll() })
  }



  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
}
