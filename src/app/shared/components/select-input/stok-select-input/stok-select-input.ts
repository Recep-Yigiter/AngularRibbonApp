import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddStokComponent } from 'src/app/pages/stok/dialog-add-stok/dialog-add-stok.component';
import { DialogSelectStokComponent } from 'src/app/pages/stok/dialog-select-stok/dialog-select-stok.component';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'stok-select-input',
  templateUrl: './stok-select-input.html',
  styleUrls: ['./stok-select-input.scss']
})
export class StokSelectInput {
  @Input() formControlNames: any;
  @Output() public childFunc: EventEmitter<any> = new EventEmitter();
  @Input() field: any;
  @Input() label:any;
  selectedStokItem: any;


  constructor(private dialog: MatDialog,private CustomDialogService:CustomDialogService) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }


  StokSelectDialogOpen() {
    this.CustomDialogService.normalDialog({
      componentType:DialogSelectStokComponent,
      data:{ issue: {} = "" },
      
    })
   

  }
}
