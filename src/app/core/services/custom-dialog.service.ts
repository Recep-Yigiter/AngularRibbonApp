import { DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/shared/dialogs/delete-dialog/delete-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/dialogs/error-dialog/error-dialog.component';


@Injectable({
    providedIn: 'root'
})
export class CustomDialogService {
    selectedData: any;
    @Output() public childFunc: EventEmitter<any> = new EventEmitter();
    constructor(
        private dialog: MatDialog,

    ) { }

    smallDialog(DialogParameters: Partial<DialogParameters>, successCallBack?: (data) => void) {
        const dialogRef = this.dialog.open(DialogParameters.componentType, {
            width: '24%',
            minWidth: '0px',
            // height: '39vh',
            maxWidth: '30vw',
            disableClose: true,
            autoFocus: false,
            restoreFocus: false,
            data: DialogParameters.data,
        });

        dialogRef.afterClosed().subscribe(result => {
            DialogParameters.afterClose()
            // if (result != DialogParameters.data) { DialogParameters.afterClose() }
            if (dialogRef.componentInstance._selectedDataItem == null) { return }
            this.selectedData = dialogRef.componentInstance._selectedDataItem;
            successCallBack(this.selectedData);
        });
    }

    normalDialog(DialogParameters: Partial<DialogParameters>, successCallBack?: (data) => void,) {
        const dialogRef = this.dialog.open(DialogParameters.componentType, {
            width: '40%',
            minWidth: '0px',
            height: '59vh',
            maxWidth: '59vw',
            disableClose: true,
            autoFocus: false,
            restoreFocus: false,
            data: DialogParameters.data,
        });

        dialogRef.afterClosed().subscribe(result => {
            
            if (result == DialogParameters.data) { DialogParameters.afterClose() }
            if (dialogRef.componentInstance._selectedDataItem == null) { return }
            this.selectedData = dialogRef.componentInstance._selectedDataItem;
            successCallBack(this.selectedData);
    

        });


    }

    largeDialog(DialogParameters: Partial<DialogParameters>, successCallBack?: (data) => void) {
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(DialogParameters.componentType, {
            width: '100%',
            minWidth: '0px',
            height: '89vh',
            maxWidth: '89vw',
            disableClose: true,
            autoFocus: false,
            restoreFocus: false,
            data: DialogParameters.data,

        });

        // dialogRef.afterClosed().subscribe(result => {
        //     if (result == DialogParameters.data) { DialogParameters.afterClose() }
        //     if (dialogRef.componentInstance._selectedDataItem == null) { return }
        //     this.selectedData = dialogRef.componentInstance._selectedDataItem;
        //     successCallBack(this.selectedData);

        // });

        dialogRef.afterClosed().subscribe(result => {
            DialogParameters.afterClose()
            if (dialogRef.componentInstance._selectedDataItem == null) { return }
            this.selectedData = dialogRef.componentInstance._selectedDataItem;
            successCallBack(this.selectedData);
        });

    }


    errorDialog(errorMessage) {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '19%',
            minWidth: '0px',
            height: '19vh',
            maxWidth: '19vw',
            disableClose: true,
            autoFocus: false,
            restoreFocus: false,
            data: errorMessage,

        });


    }
    deleteDialog(successCallBack:()=>void) {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '19%',
            minWidth: '0px',
            height: '19vh',
            maxWidth: '19vw',
            disableClose: true,
            autoFocus: false,
            restoreFocus: false,
            data: DeleteState.Yes,

        });

        dialogRef.afterClosed().subscribe(result => {
            if (result == DeleteState.Yes) { 
               successCallBack()
            }

        })
    }



}

export class DialogParameters {
    componentType?: ComponentType<any>;
    data?: any;
    afterClose?: () => void;
}



