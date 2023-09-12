import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StokCardAddComponent } from '../stok-card-add/stok-card-add.component';



@Injectable({
  providedIn: 'root'
})
export class StokCardDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }


  treeViewItems:any;
  StokCardAddDialog(event,successCallBack?: (treeViewItems) => void) {


    const dialogRef = this.dialog.open(StokCardAddComponent, {
      width: '25%',
      minWidth: '300px',
      height: '28vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data:event
    });
    
    dialogRef.afterClosed().subscribe(result => {
       if (dialogRef.componentInstance.treeViewItems == null) { return }

       this.treeViewItems = dialogRef.componentInstance.treeViewItems;
      successCallBack(this.treeViewItems);
    });


  }










}



