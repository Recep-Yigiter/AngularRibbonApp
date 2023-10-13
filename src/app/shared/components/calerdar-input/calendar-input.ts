import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'calendar-input',
    templateUrl: './calendar-input.html',
    styleUrls: ['./calendar-input.scss']
})
export class CalendarInput {
    @Input() formControlNames: any;
    @Input() readonly: boolean;
    @Input() field: any;
    @Input() label:any;
    @Input() type:any;
    @Input() valueInput:any;
    @Input() styleInput:any;
    @Input() disableInput:any=true;


    // date:any;
    // DateObj:Date;
    constructor( private ref: ChangeDetectorRef) {

        // this.date= DateObj.getFullYear() + '/' + ('0' + (DateObj.getMonth() + 1)).slice(-2) + '/' + ('0' + DateObj.getDate()).slice(-2);

    }

    // ngAfterContentChecked() {
    //     this.ref.detectChanges();
    // }



}
