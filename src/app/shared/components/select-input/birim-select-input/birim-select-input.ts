import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSelectBirimComponent } from 'src/app/pages/birim/dialog-select-birim/dialog-select-birim.component';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'birim-select-input',
  templateUrl: './birim-select-input.html',
  styleUrls: ['./birim-select-input.scss']
})
export class BirimSelectInput {
  @Input() formControlNames: any;
  @Output() public childFunc: EventEmitter<any> = new EventEmitter();
  @Input() field: any;
  @Input() label:any;
  selectedBirimItem: any;


  constructor(private dialog: MatDialog) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }


  BirimSelectDialogOpen() {
    const dialogRef = this.dialog.open(DialogSelectBirimComponent, {
      width: '40%',
      minWidth: '40%',
      height: '550px',
      maxWidth: '850px',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data: { issue: {} = "" }

    });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance._selectedDataItem == null) {
        return
      }
      this.selectedBirimItem = dialogRef.componentInstance._selectedDataItem;
      this.childFunc.emit(this.selectedBirimItem)

    });


  }
}
