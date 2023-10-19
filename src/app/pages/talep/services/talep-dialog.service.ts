import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListByTalepIdComponent } from '../../talep-hareket/list-by-talep-id/list-by-talepId.component';



@Injectable({
  providedIn: 'root'
})
export class TalepDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }



  ListByTalepId(event, successCallBack?: () => void) {
      const dialogRef = this.dialog.open(ListByTalepIdComponent, {
        width: '100%',
        minWidth: '0px',
        height: '89vh',
        maxWidth: '89vw',
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



