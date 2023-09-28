import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddBirimComponent } from 'src/app/pages/birim/dialog-add-birim/dialog-add-birim.component';
import { DialogUpdateBirimComponent } from 'src/app/pages/birim/dialog-update-birim/dialog-update-birim.component';



@Injectable({
  providedIn: 'root'
})
export class BirimDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }



  addDialog(successCallBack?: () => void) {


    const dialogRef = this.dialog.open(DialogAddBirimComponent, {
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
    const dialogRef = this.dialog.open(DialogUpdateBirimComponent, {
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



