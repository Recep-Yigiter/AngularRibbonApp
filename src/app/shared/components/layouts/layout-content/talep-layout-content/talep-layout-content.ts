import { ChangeDetectorRef, Component, Injectable, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'talep-layout-content',
    templateUrl: './talep-layout-content.html',
    styleUrls: ['./talep-layout-content.scss']
})

export class TalepLayoutContent {
    @Input() layoutName: any;
    

    constructor( private ref: ChangeDetectorRef) {
       
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }





}