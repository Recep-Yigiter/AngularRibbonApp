import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectDepoComponent } from 'src/app/pages/depo/dialog-select-depo/dialog-select-depo.component';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'depo-select-input',
  templateUrl: './depo-select-input.html',
  styleUrls: ['./depo-select-input.scss']
})
export class DepoSelectInput {
  @Input() formControlNames: any;
  @Output() public childFunc: EventEmitter<any> = new EventEmitter();
  @Input() field: any;
  @Input() label:any;
  selectedDepoItem: any;


  constructor(private dialog: MatDialog,private CustomDialogService:CustomDialogService) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }


  selectedData: any;
  DepoSelectDialogOpen() {   
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectDepoComponent,
      data: this.selectedData,
      afterClose: () => { }
    }, (data) => {
       this.selectedData = data;
       this.childFunc.emit(this.selectedData)
      })


  }
}
