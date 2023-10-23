import { DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


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
            height: '39vh',
            maxWidth: '30vw',
            disableClose: true,
            autoFocus: false,
            restoreFocus: false,
            data: DialogParameters.data,
        });

        dialogRef.afterClosed().subscribe(result => {
            if (dialogRef.componentInstance._selectedDataItem == null) { return }
            this.selectedData = dialogRef.componentInstance._selectedDataItem;

            successCallBack(this.selectedData);

        });
    }

    normalDialog(DialogParameters: Partial<DialogParameters>, successCallBack?: (data) => void) {
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
            data: DialogParameters.data
        });

        dialogRef.afterClosed().subscribe(result => {
            if (dialogRef.componentInstance._selectedDataItem == null) { return }
            this.selectedData = dialogRef.componentInstance._selectedDataItem;

            successCallBack(this.selectedData);

        });



    }


   
 
}

export class DialogParameters {
    componentType?: ComponentType<any>;
    data?: any;
    afterClose?: () => void;
}



