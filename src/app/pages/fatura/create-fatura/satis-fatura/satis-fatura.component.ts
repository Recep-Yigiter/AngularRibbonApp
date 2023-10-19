import { Component, OnInit } from '@angular/core';
import { CreateFaturaHareketModel, CreateFaturaModel } from '../../models/create-fatura.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaturaService } from '../../services/fatura.service';
import { StokDialogService } from '../../../stok/services/stok-dialog.service';

@Component({
  selector: 'app-satis-fatura',
  templateUrl: './satis-fatura.component.html',
  styleUrls: ['./satis-fatura.component.scss']
})
export class SatisFaturaComponent implements OnInit {
  satisFaturaItem: any;
  dataSource: any;
  selectedItem: any;
  date: Date;
  defaultOtv: any = { name: "Yok" }
  defaultFiyat = 0;
  faturaSeri: any = "AF";
  faturaBelgeNo: any;
  formReferans: any;
  constructor(private fb: FormBuilder,
    private FaturaService: FaturaService,
    private stokDialogService: StokDialogService
    // private dialogRef: MatDialogRef<AlisFaturaComponent>
  ) { }

  async ngOnInit() {

    this.date = new Date;

    const fatura = await this.FaturaService.GetCode()
    this.faturaBelgeNo = fatura.data;
    this.formReferans = `${this.frm.value.seri}-${this.faturaBelgeNo?.kod}`


  }


  public frm: FormGroup = this.fb.group({
    tarih: [null, [Validators.required, Validators.maxLength(16)]],
    seri: [null, [Validators.required, Validators.maxLength(16)]],
    belgeNo: [null, [Validators.required, Validators.maxLength(16)]],
    cariId: [null, [Validators.required, Validators.maxLength(16)]],
    referans: [null, [Validators.required, Validators.maxLength(16)]],
    eFatura: [null, [Validators.required, Validators.maxLength(16)]],
    kdv: [null, [Validators.required, Validators.maxLength(16)]],
    otv: [null, [Validators.required, Validators.maxLength(16)]],
    eArsiv: [null, [Validators.required, Validators.maxLength(16)]],
    depoSecme: [null, [Validators.required, Validators.maxLength(16)]],
    depoAd: [null, [Validators.required, Validators.maxLength(16)]],
    depoKod: [null, [Validators.required, Validators.maxLength(16)]],
    duzenleyen: [null, [Validators.required, Validators.maxLength(16)]],
    cariKod: [null, [Validators.required, Validators.maxLength(16)]],
    aciklama: [null, [Validators.required, Validators.maxLength(16)]],
    diger: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get tarih() { return this.frm.get('tarih') }
  get seri() { return this.frm.get('seri') }
  get belgeNo() { return this.frm.get('belgeNo') }
  get cariId() { return this.frm.get('cariId') }
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
  get aciklama() { return this.frm.get('aciklama') }
  get diger() { return this.frm.get('diger') }

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
    this.satisFaturaItem = event.data;

  }
  onRowUnSelect() {
    this.satisFaturaItem = null
  }

  saveFatura() {
    this.frm.value.cariId = this.cariSelectItem?.id;

    const model = new CreateFaturaModel();
    model.belgeNo = this.frm.value.belgeNo;
    model.faturaTuru = 2;
    model.seri = this.frm.value.seri;
    model.referans = this.frm.value.referans;
    model.kdv = this.frm.value.kdv;
    model.otv = this.frm.value.otv;
    model.eFatura = this.frm.value.eFatura;
    model.eArsiv = this.frm.value.eArsiv;
    model.aciklama = this.frm.value.aciklama;
    model.cariId = this.cariSelectItem?.id;

    model.faturaHareketler = this.faturaHareketler;

    if (this.cariSelectItem?.id != undefined || this.cariSelectItem?.id != null) {
      this.FaturaService.create(model, () => {
        window.location.reload();


      }, errorMessage => {
        console.log("Hata....", errorMessage)
        setTimeout(() => {
          console.log("Hata....", errorMessage)
        }, 1000)
      })
    }


  }
  faturaHareketler: CreateFaturaHareketModel[] = [];
  faturaHareket: CreateFaturaHareketModel;

  addStok() {
    this.faturaHareket = {}
    this.stokDialogService.selectDialog((data) => {

      data.faturaHareketTuru = 1;
      data.giren = 0;
      data.cikan = 0;
      data.birimFiyat = 0;
      data.depoId = this.cariSelectItem.id ? this.cariSelectItem.id : "3fa85f64-5717-4562-b3fc-2c963f66afa6";
      data.stokId = data.id;
      this.faturaHareketler.push(data);
      
    })
  }


  cariSelectItem: any;
  cariSelectItemKod: any;
  cariChildFunc(item) {
    this.cariSelectItem = item;
    this.cariSelectItemKod = item.kod;

  }


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
