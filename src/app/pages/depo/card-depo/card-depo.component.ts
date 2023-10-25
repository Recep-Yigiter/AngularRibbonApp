import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepoService } from '../services/depo.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddDepoComponent } from '../dialog-add-depo/dialog-add-depo.component';
import { DialogUpdateDepoComponent } from '../dialog-update-depo/dialog-update-depo.component';
@Component({
  selector: 'app-card-depo',
  templateUrl: './card-depo.component.html',
  styleUrls: ['./card-depo.component.scss']
})
export class CardDepoComponent implements OnInit {
  dataSource: any;
  selectedItem: any;
  DepoItem: any;
  totalHesap: any;
  constructor(private DepoService: DepoService, private CustomerDialogService: CustomDialogService) { }

  ngOnInit(): void {
    this.getList();
  }

  addDialog() {
    this.CustomerDialogService.smallDialog({
      componentType: DialogAddDepoComponent,
      afterClose: () => { this.getList() }
    })

  }
  updateDialog() {
    this.CustomerDialogService.smallDialog({
      componentType: DialogUpdateDepoComponent,
      data:this.DepoItem,
      afterClose: () => { this.getList() }
    })
  }
  deleteDialog() {
    this.CustomerDialogService.deleteDialog(() => {
      this.DepoService.delete(this.DepoItem.id, () => { this.getList() });
    })
  }

  onRowSelect(event: any) {
    this.DepoItem = event.data;

  }
  onRowUnSelect() {
    this.DepoItem = null
  }



  async getList() {
    const list = await this.DepoService.GetList();
    this.dataSource = list.data.items;
  }



  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }


}
