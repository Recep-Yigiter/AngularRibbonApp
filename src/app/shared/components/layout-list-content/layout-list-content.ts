import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'layout-list-content',
    templateUrl: './layout-list-content.html',
    styleUrls: ['./layout-list-content.scss']
})
export class LayoutListContent {
    @Input() layoutName: any;

    constructor( private ref: ChangeDetectorRef) {
       
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }





}
