import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alinan-teklif',
  templateUrl: './alinan-teklif.component.html',
  styleUrls: ['./alinan-teklif.component.scss']
})
export class AlinanTeklifComponent implements OnInit {
  alisFaturaItem: any;
  dataSource: any;
  selectedItem: any;
  date: Date;
  defaultDurum: any = { name: "Onay Bekliyor" }
  defaultFiyat = 0;
  TeklifSeri: any = "TLP";
  TeklifNo: any;
  formReferans: any;
  constructor(private fb: FormBuilder) { }
  data="";
  ngOnInit(): void {
    this.date = new Date;


  }

  public frm: FormGroup = this.fb.group({
    tarih: [null, [Validators.required, Validators.maxLength(16)]],
    seri: [null, [Validators.required, Validators.maxLength(16)]],
    teklifNo: [null, [Validators.required, Validators.maxLength(16)]],
    TeklifNedeni: [null, [Validators.required, Validators.maxLength(16)]],
    cariId: [null, [Validators.required, Validators.maxLength(16)]],
    duzenleyen: [null, [Validators.required, Validators.maxLength(16)]],
    cariKod: [null, [Validators.required, Validators.maxLength(16)]],
    aciklama: [null, [Validators.required, Validators.maxLength(16)]],
    durum: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get tarih() { return this.frm.get('tarih') }
  get seri() { return this.frm.get('seri') }
  get teklifNo() { return this.frm.get('teklifNo') }
  get TeklifNedeni() { return this.frm.get('TeklifNedeni') }
  get cariId() { return this.frm.get('cariId') }
  get cariKod() { return this.frm.get('cariKod') }
  get duzenleyen() { return this.frm.get('duzenleyen') }
  get aciklama() { return this.frm.get('aciklama') }
  get durum() { return this.frm.get('durum') }


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
  cariSelectItem: any;
  cariSelectItemKod: any;
  cariChildFunc(item) {
    this.cariSelectItem = item;
    this.cariSelectItemKod = item.kod;

  }
  TeklifHareketler: any[] = [];
  TeklifHareket: any;


  depoSelectItem: any;
  depoSelectItemKod: any;
  depoChildFunc(item) {
    this.depoSelectItem = item;
    this.depoSelectItemKod = item.kod;

  }



  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
