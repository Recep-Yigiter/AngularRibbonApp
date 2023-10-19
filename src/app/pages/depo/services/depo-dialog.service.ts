import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListByDepoIdComponent } from '../../depo-hareket/list-by-depoId/list-by-depoId.component';



@Injectable({
  providedIn: 'root'
})
export class DepoDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }



  ListByDepoId(event, successCallBack?: () => void) {


      const dialogRef = this.dialog.open(ListByDepoIdComponent, {
        width: '40%',
        minWidth: '40%',
        height: '550px',
        maxWidth: '850px',
        disableClose: true,
        autoFocus: false,
        restoreFocus: false,
        data: event
      });

      dialogRef.afterClosed().subscribe(result => {
        successCallBack();
      });
   
 



  }


//   updateDialog(event, successCallBack?: () => void) {
//     const dialogRef = this.dialog.open(DialogUpdateDepoComponent, {
//       width: '25%',
//       minWidth: '300px',
//       height: '35vh',
//       disableClose: true,
//       autoFocus: false,
//       restoreFocus: false,
//       data: event
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       successCallBack();
//     });


//   }

//   selectedData: any;
//   selectDialog(successCallBack?: (data) => void) {


//     const dialogRef = this.dialog.open(DialogSelectDepoComponent, {
//       width: '40%',
//       minWidth: '40%',
//       height: '550px',
//       maxWidth: '850px',
//       disableClose: true,
//       autoFocus: false,
//       restoreFocus: false,

//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (dialogRef.componentInstance._selectedDataItem == null) { return }

//       this.selectedData = dialogRef.componentInstance._selectedDataItem;
//       successCallBack(this.selectedData);
//     });





//   }








}



