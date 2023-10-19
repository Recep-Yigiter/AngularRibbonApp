import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'layout-content',
    templateUrl: './layout-content.html',
    styleUrls: ['./layout-content.scss']
})
export class LayoutContent {
    @Input() layoutName: any;

    constructor( private ref: ChangeDetectorRef) {
       
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }





}
