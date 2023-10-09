import { ChangeDetectorRef, Component, Injectable, Input } from '@angular/core';

export enum CategoryEnum {

    Alis = 1,
    Satis = 2,

}
export const CategoryMapping = [
    { value: CategoryEnum.Alis, type: 'YariMamul' },
    { value: CategoryEnum.Satis, type: 'Hammadde' },

];
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'kdv',
    templateUrl: './kdv.html',
    styleUrls: ['./kdv.scss']
})
export class Kdv {
    @Input() formControlNames: any;
    @Input() readonly: boolean;
    @Input() field: any;
    @Input() label: any;
    @Input() type: any;

    options: any[];
    constructor(private ref: ChangeDetectorRef) {



        this.options = [
            { name: "Dahil" },
            { name: "Hariç" }
        ]


    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

    changeValue() {

    }



}
