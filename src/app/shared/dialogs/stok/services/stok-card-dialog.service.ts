import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StokCardAddComponent } from '../stok-card-add/stok-card-add.component';
import { StokCardUpdateComponent } from '../stok-card-update/stok-card-update.component';
import { StokCardChildAddComponent } from '../stok-card-child-add/stok-card-child-add.component';



@Injectable({
  providedIn: 'root'
})
export class StokCardDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }



  addDialog(successCallBack?: () => void) {


    const dialogRef = this.dialog.open(StokCardAddComponent, {
      width: '25%',
      minWidth: '300px',
      height: '35vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
   
    });
    
    dialogRef.afterClosed().subscribe(result => {
      successCallBack();
    });


  }
  addChildDialog(event,successCallBack?: () => void) {


    const dialogRef = this.dialog.open(StokCardChildAddComponent, {
      width: '25%',
      minWidth: '300px',
      height: '35vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data:event
    });
    
    dialogRef.afterClosed().subscribe(result => {
      //  if (dialogRef.componentInstance.treeViewItems == null) { return }

      //  this.treeViewItems = dialogRef.componentInstance.treeViewItems;
      successCallBack();
    });


  }

  updateDialog(event,successCallBack?: () => void) {
    const dialogRef = this.dialog.open(StokCardUpdateComponent, {
      width: '25%',
      minWidth: '300px',
      height: '35vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data:event
    });
    
    dialogRef.afterClosed().subscribe(result => {
      //  if (dialogRef.componentInstance.treeViewItems == null) { return }

      //  this.treeViewItems = dialogRef.componentInstance.treeViewItems;
      successCallBack();
    });


  }








}



