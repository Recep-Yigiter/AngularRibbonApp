import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddStokComponent } from 'src/app/pages/stok/dialog-add-stok/dialog-add-stok.component';
import { DialogSelectStokComponent } from 'src/app/pages/stok/dialog-select-stok/dialog-select-stok.component';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'irsaliye-select-input',
  templateUrl: './irsaliye-select-input.html',
  styleUrls: ['./irsaliye-select-input.scss']
})
export class IrsaliyeSelectInput {
  @Input() formControlNames: any;
  @Output() public childFunc: EventEmitter<any> = new EventEmitter();
  @Input() field: any;
  @Input() label:any;
  @Input() irsaliyeTuru:any;
  selectedStokItem: any;


  constructor(private dialog: MatDialog,private CustomDialogService:CustomDialogService) { }




  IrsaliyeSelectDialogOpen() {
    
    this.CustomDialogService.normalDialog({
      data:{ issue: {} = "" },
      afterClose:()=>{}
    })


  }
}
