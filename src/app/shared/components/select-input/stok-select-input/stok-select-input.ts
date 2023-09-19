import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StokCardSelectComponent } from 'src/app/shared/dialogs/stok/stok-card-select/stok-card-select.component';


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


  constructor(private dialog: MatDialog) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }


  StokSelectDialogOpen() {
    const dialogRef = this.dialog.open(StokCardSelectComponent, {
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
      this.selectedStokItem = dialogRef.componentInstance._selectedDataItem;
      this.childFunc.emit(this.selectedStokItem)

    });


  }
}
