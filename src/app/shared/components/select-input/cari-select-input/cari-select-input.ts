import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  @Input() label:any;
  selectedCariItem: any;


  constructor(private dialog: MatDialog) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }


  CariSelectDialogOpen() {
    const dialogRef = this.dialog.open(DialogSelectCariComponent, {
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
      this.selectedCariItem = dialogRef.componentInstance._selectedDataItem;
      this.childFunc.emit(this.selectedCariItem)

    });


  }
}
