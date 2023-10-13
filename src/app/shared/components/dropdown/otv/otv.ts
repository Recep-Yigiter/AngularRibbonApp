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
    selector: 'otv',
    templateUrl: './otv.html',
    styleUrls: ['./otv.scss']
})
export class Otv {
    @Input() formControlNames: any;
    @Input() readonly: boolean;
    @Input() field: any;
    @Input() label: any;
    @Input() type: any;
    @Input() disableInput: any;
    options: any[];
    constructor(private ref: ChangeDetectorRef) {



        this.options = [
            { name: "Dahil" },
            { name: "Hariç" },
            { name: "Yok" },
        ]


    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

    changeValue() {

    }



}
