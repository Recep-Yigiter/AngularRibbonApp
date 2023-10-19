import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'talep-hareket-layout-list-content',
    templateUrl: './talep-hareket-layout-list-content.html',
    styleUrls: ['./talep-hareket-layout-list-content.scss']
})
export class TalepHareketLayoutListContent {
    @Input() layoutName: any;

    constructor( private ref: ChangeDetectorRef) {
       
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }





}
