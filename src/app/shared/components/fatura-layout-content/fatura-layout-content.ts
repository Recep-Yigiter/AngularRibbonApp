import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'fatura-layout-content',
    templateUrl: './fatura-layout-content.html',
    styleUrls: ['./fatura-layout-content.scss']
})

export class FaturaLayoutContent {
    @Input() layoutName: any;

    constructor( private ref: ChangeDetectorRef) {
       
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }





}