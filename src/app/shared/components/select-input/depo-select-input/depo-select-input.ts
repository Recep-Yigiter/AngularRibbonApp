import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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


  constructor(private dialog: MatDialog) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }


  DepoSelectDialogOpen() {
    const dialogRef = this.dialog.open(DialogSelectDepoComponent, {
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
      this.selectedDepoItem = dialogRef.componentInstance._selectedDataItem;
      this.childFunc.emit(this.selectedDepoItem)

    });


  }
}
