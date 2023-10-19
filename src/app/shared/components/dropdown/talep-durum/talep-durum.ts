import { ChangeDetectorRef, Component, Injectable, Input } from '@angular/core';

export enum CategoryEnum {

    OnayBekliyor = 1,
    Onaylandı = 2,
    Reddedildi = 2,

}
export const CategoryMapping = [
    { value: CategoryEnum.OnayBekliyor, type: 'OnayBekliyor' },
    { value: CategoryEnum.Onaylandı, type: 'Onaylandı' },
    { value: CategoryEnum.Reddedildi, type: 'Reddedildi' },

];
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'talep-durum',
    templateUrl: './talep-durum.html',
    styleUrls: ['./talep-durum.scss']
})
export class TalepDurum {
    @Input() formControlNames: any;
    @Input() readonly: boolean;
    @Input() field: any;
    @Input() label: any;
    @Input() type: any;
    @Input() disableInput: any;
    options: any[];
    constructor(private ref: ChangeDetectorRef) {



        this.options = [
            { name: "Onay Bekliyor" },
            { name: "Onaylandı" },
            { name: "Reddedildi" }
        ]


    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

    changeValue() {

    }



}
