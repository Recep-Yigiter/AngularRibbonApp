import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReceteCardAddComponent } from '../recete-card-add/recete-card-add.component';
import { ReceteChildCardAddComponent } from '../recete-child-card-add/recete-child-card-add.component';



@Injectable({
  providedIn: 'root'
})
export class ReceteCardDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }


  treeViewItems:any;
  ReceteCardAddDialog(successCallBack?: (treeViewItems) => void) {


    const dialogRef = this.dialog.open(ReceteCardAddComponent, {
      width: '25%',
      minWidth: '300px',
      height: '35vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    
    });
    
    dialogRef.afterClosed().subscribe(result => {
       if (dialogRef.componentInstance.treeViewItems == null) { return }

       this.treeViewItems = dialogRef.componentInstance.treeViewItems;
      successCallBack(this.treeViewItems);
    });


  }
  treeViewChildItems:any;
  ReceteChildCardAddDialog(event,successCallBack?: (treeViewChildItems) => void) {


    const dialogRef = this.dialog.open(ReceteChildCardAddComponent, {
      width: '25%',
      minWidth: '300px',
      height: '35vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data:event
    });
    
    dialogRef.afterClosed().subscribe(result => {
       if (dialogRef.componentInstance.treeViewChildItems == null) { return }

       this.treeViewChildItems = dialogRef.componentInstance.treeViewChildItems;
      successCallBack(this.treeViewChildItems);
    });


  }










}



