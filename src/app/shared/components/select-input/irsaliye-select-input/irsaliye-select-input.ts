import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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


  constructor(private dialog: MatDialog) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }


  IrsaliyeSelectDialogOpen() {
    
const dialogRef = this.dialog.open(DialogSelectStokComponent, {
      width: '40%',
      minWidth: '40%',
      height: '550px',
      maxWidth: '850px',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data:this.irsaliyeTuru

    });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance._selectedDataItem == null) {
        return
      }
      this.selectedStokItem = dialogRef.componentInstance._selectedDataItem;
      this.childFunc.emit(this.selectedStokItem)

    });


  }
}
