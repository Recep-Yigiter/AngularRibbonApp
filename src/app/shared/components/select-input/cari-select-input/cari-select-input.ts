import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectCariComponent } from 'src/app/pages/cari/dialog-select-cari/dialog-select-cari.component';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'cari-select-input',
  templateUrl: './cari-select-input.html',
  styleUrls: ['./cari-select-input.scss']
})
export class CariSelectInput {
  @Input() formControlNames: any;
  @Output() public childFunc: EventEmitter<any> = new EventEmitter();
  @Input() field: any;
  @Input() label: any;
  selectedCariItem: any;


  constructor(private CustomDialogService: CustomDialogService) { }

  selectedData: any;
  CariSelectDialogOpen() {
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectCariComponent,
      data: this.selectedData,
      afterClose: () => { }
    }, (data) => {
       this.selectedData = data;
       this.childFunc.emit(this.selectedData)
      })

  }
}
