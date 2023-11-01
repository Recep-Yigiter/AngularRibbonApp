import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-child-urun-agaci',
  templateUrl: './dialog-add-child-urun-agaci.component.html',
  styleUrls: ['./dialog-add-child-urun-agaci.component.scss']
})
export class DialogAddChildUrunAgaciComponent implements OnInit {
  dataSource: any;
  selectedItem: any;
  urunAgaciItem: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private fb:FormBuilder) { }

  ngOnInit(): void {}


  public frm: FormGroup = this.fb.group({
    ustUrunAgaciAdi: [null, [Validators.required, Validators.maxLength(16)]],
    ustUrunAgaciKodu: [null, [Validators.required, Validators.maxLength(16)]],
    urunAgaciAdi: [null, [Validators.required, Validators.maxLength(16)]],
    urunAgaciKodu: [null, [Validators.required, Validators.maxLength(16)]],


  });
  get ustUrunAgaciAdi() { return this.frm.get('ustUrunAgaciAdi') }
  get ustUrunAgaciKodu() { return this.frm.get('ustUrunAgaciKodu') }
  get urunAgaciAdi() { return this.frm.get('urunAgaciAdi') }
  get urunAgaciKodu() { return this.frm.get('urunAgaciKodu') }


  onRowSelect(event: any) {
    this.urunAgaciItem = event.data;
  }
  onRowUnSelect() {
    this.urunAgaciItem = null
  }

  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
