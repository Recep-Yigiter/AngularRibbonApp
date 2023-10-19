import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'select-list-layout-content',
    templateUrl: './select-list-layout-content.html',
    styleUrls: ['./select-list-layout-content.scss']
})
export class SelectListLayoutContent {
    @Input() layoutName: any;

    constructor( private ref: ChangeDetectorRef) {
       
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }





}
