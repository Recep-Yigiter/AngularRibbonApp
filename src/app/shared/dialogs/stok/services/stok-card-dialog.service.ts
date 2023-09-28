import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddStokComponent } from 'src/app/pages/stok/dialog-add-stok/dialog-add-stok.component';
import { DialogAddChildStokComponent } from 'src/app/pages/stok/dialog-add-child-stok/dialog-add-child-stok.component';
import { DialogUpdateStokComponent } from 'src/app/pages/stok/dialog-update-stok/dialog-update-stok.component';



@Injectable({
  providedIn: 'root'
})
export class StokCardDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }



  addDialog(event, successCallBack?: () => void) {

    if (event == null) {
      const dialogRef = this.dialog.open(DialogAddStokComponent, {
        width: '25%',
        minWidth: '300px',
        height: '25vh',
        disableClose: true,
        autoFocus: false,
        restoreFocus: false,
        data: event
      });

      dialogRef.afterClosed().subscribe(result => {
        successCallBack();
      });
    }
    else {
      const dialogRef = this.dialog.open(DialogAddChildStokComponent, {
        width: '25%',
        minWidth: '300px',
        height: '35vh',
        disableClose: true,
        autoFocus: false,
        restoreFocus: false,
        data: event
      });

      dialogRef.afterClosed().subscribe(result => {
        successCallBack();
      });

    }



  }


  updateDialog(event, successCallBack?: () => void) {
    const dialogRef = this.dialog.open(DialogUpdateStokComponent, {
      width: '25%',
      minWidth: '300px',
      height: '35vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      //  if (dialogRef.componentInstance.treeViewItems == null) { return }

      //  this.treeViewItems = dialogRef.componentInstance.treeViewItems;
      successCallBack();
    });


  }








}



