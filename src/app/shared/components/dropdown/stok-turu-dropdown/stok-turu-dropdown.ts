import { ChangeDetectorRef, Component, Injectable, Input } from '@angular/core';

export enum CategoryEnum {

    YariMamul = 1,
    Hammadde = 2,
  
  }
export const CategoryMapping = [
    { value: CategoryEnum.YariMamul, type: 'YariMamul' },
    { value: CategoryEnum.Hammadde, type: 'Hammadde' },
  
  ];
@Injectable({
    providedIn: 'root',
})
@Component({
    selector: 'stok-turu-dropdown',
    templateUrl: './stok-turu-dropdown.html',
    styleUrls: ['./stok-turu-dropdown.scss']
})
export class StokTuruDropDown {
    @Input() formControlNames: any;
    @Input() readonly: boolean;
    @Input() field: any;
    @Input() label:any;
    @Input() type:any;

    @Input() selectedValue: any;
    public categoryTypes: any;
    constructor(private ref: ChangeDetectorRef) {
        this.categoryTypes = CategoryMapping;
       this.selectedValue = this.categoryTypes[0];
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

    changeValue() {
     
    }



}
