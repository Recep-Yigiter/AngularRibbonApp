import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'common-input',
    templateUrl: './input.html',
    styleUrls: ['./input.scss']
})
export class CommonInput {
    @Input() formControlNames: any;
    @Input() readonly: boolean;
    @Input() field: any;
    @Input() label:any;
    @Input() type:any;
    @Input() valueInput:any;
    @Input() disabled:any;
    constructor( private ref: ChangeDetectorRef) {
       
    }

    // ngAfterContentChecked() {
    //     this.ref.detectChanges();
    // }



}
