import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alis-fatura',
  templateUrl: './alis-fatura.component.html',
  styleUrls: ['./alis-fatura.component.scss']
})
export class AlisFaturaComponent implements OnInit {
  alisFaturaItem: any;
  dataSource: any;
  selectedItem: any;
  date: Date;
  defaultOtv: any = { name: "Yok" }
  defaultFiyat = 0;
  faturaSeri: any = "AF"
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.date = new Date;

  }


  public frm: FormGroup = this.fb.group({

    tarih: [null, [Validators.required, Validators.maxLength(16)]],
    seri: [null, [Validators.required, Validators.maxLength(16)]],
    belgeNo: [null, [Validators.required, Validators.maxLength(16)]],
    cariKod: [null, [Validators.required, Validators.maxLength(16)]],
    cariAd: [null, [Validators.required, Validators.maxLength(16)]],
    cariId: [null, [Validators.required, Validators.maxLength(16)]],
    depoSecme: [null, [Validators.required, Validators.maxLength(16)]],
    depoAd: [null, [Validators.required, Validators.maxLength(16)]],
    depoKod: [null, [Validators.required, Validators.maxLength(16)]],
    duzenleyen: [null, [Validators.required, Validators.maxLength(16)]],
    referans: [null, [Validators.required, Validators.maxLength(16)]],
    eFatura: [null, [Validators.required, Validators.maxLength(16)]],
    kdv: [null, [Validators.required, Validators.maxLength(16)]],
    otv: [null, [Validators.required, Validators.maxLength(16)]],
    eArsiv: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get tarih() { return this.frm.get('tarih') }
  get seri() { return this.frm.get('seri') }
  get belgeNo() { return this.frm.get('belgeNo') }
  get cariAd() { return this.frm.get('cariAd') }
  get cariKod() { return this.frm.get('cariKod') }
  get depoSecme() { return this.frm.get('depoSecme') }
  get depoAd() { return this.frm.get('depoAd') }
  get depoKod() { return this.frm.get('depoKod') }
  get duzenleyen() { return this.frm.get('duzenleyen') }
  get referans() { return this.frm.get('referans') }
  get eFatura() { return this.frm.get('eFatura') }
  get kdv() { return this.frm.get('kdv') }
  get otv() { return this.frm.get('otv') }
  get eArsiv() { return this.frm.get('eArsiv') }

  public irsaliyeFrm: FormGroup = this.fb.group({
    irsaliyeTur: [null],
    irsaliyeSeri: [null, [Validators.required, Validators.maxLength(16)]],
    irsaliyeNo: [null, [Validators.required, Validators.maxLength(16)]],
    fiyat: [null, [Validators.required, Validators.maxLength(16)]],
    irsaliyeAdi: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get irsaliyeTur() { return this.irsaliyeFrm.get('irsaliyeTur') }
  get irsaliyeSeri() { return this.irsaliyeFrm.get('irsaliyeSeri') }
  get irsaliyeNo() { return this.irsaliyeFrm.get('irsaliyeNo') }
  get fiyat() { return this.irsaliyeFrm.get('fiyat') }
  get irsaliyeAdi() { return this.irsaliyeFrm.get('irsaliyeAdi') }


  onRowSelect(event: any) {
    this.alisFaturaItem = event.data;

  }
  onRowUnSelect() {
    this.alisFaturaItem = null
  }

  saveFatura() {
    // var DateObj = new Date();
    // this.frm.value.tarih= DateObj.getFullYear() + '/' + ('0' + (DateObj.getMonth() + 1)).slice(-2) + '/' + ('0' + DateObj.getDate()).slice(-2);
    // this.frm.value.otv=this.frm.value.otv.name
    this.frm.value.cariId=this.cariSelectItem.id
    this.frm.value.cariKod=this.cariSelectItem.kod
    console.log(this.frm.value)
  }


  cariSelectItem: any;
  cariSelectItemKod: any;
  cariChildFunc(item) {
    this.cariSelectItem = item;
    this.cariSelectItemKod = item.kod;

  }































  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
