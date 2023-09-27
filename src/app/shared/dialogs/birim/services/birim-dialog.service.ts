import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BirimAddDialogComponent } from '../birim-add-dialog/birim-add-dialog.component';
import { BirimUpdateDialogComponent } from '../birim-update-dialog/birim-update-dialog.component';



@Injectable({
  providedIn: 'root'
})
export class BirimDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }



  addDialog(successCallBack?: () => void) {


    const dialogRef = this.dialog.open(BirimAddDialogComponent, {
      width: '25%',
      minWidth: '300px',
      height: '28vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
   
    });
    
    
    dialogRef.afterClosed().subscribe(result => {
      successCallBack();
    });

  }
 




  updateDialog(event,successCallBack?: () => void) {
    const dialogRef = this.dialog.open(BirimUpdateDialogComponent, {
      width: '25%',
      minWidth: '300px',
      height: '28vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data:event
    });
    
    dialogRef.afterClosed().subscribe(result => {
    //    if (dialogRef.componentInstance.treeViewItems == null) { return }

    //    this.treeViewItems = dialogRef.componentInstance.treeViewItems;
      successCallBack();
    });


  }








}



