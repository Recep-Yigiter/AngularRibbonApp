import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReceteCardAddComponent } from '../recete-card-add/recete-card-add.component';
import { ReceteChildCardAddComponent } from '../recete-child-card-add/recete-child-card-add.component';
import { ReceteCardUpdateComponent } from '../recete-card-update/recete-card-update.component';



@Injectable({
  providedIn: 'root'
})
export class ReceteCardDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }


  addDialog(successCallBack?: () => void) {


    const dialogRef = this.dialog.open(ReceteCardAddComponent, {
      width: '25%',
      minWidth: '300px',
      height: '30vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    
    });
    dialogRef.afterClosed().subscribe(result => {
      successCallBack();
    });
  }


  addChildDialog(event,successCallBack?: () => void) {


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
      successCallBack();
    });
  }
  updateChildDialog(event,successCallBack?: () => void) {


    const dialogRef = this.dialog.open(ReceteCardUpdateComponent, {
      width: '25%',
      minWidth: '300px',
      height: '35vh',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
      data:event
    });
    
    dialogRef.afterClosed().subscribe(result => {
      successCallBack();
    });
  }

}



