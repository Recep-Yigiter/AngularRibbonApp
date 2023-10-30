import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaturaService } from '../../services/fatura.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateFaturaHareketModel, CreateFaturaModel } from '../../models/create-fatura.model';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectStokComponent } from 'src/app/pages/stok/dialog-select-stok/dialog-select-stok.component';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogService } from 'src/app/core/services/confirm-dialog.service';

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
  faturaSeri: any = "AF";
  faturaBelgeNo: any;
  formReferans: any;
  constructor(private fb: FormBuilder,
    private FaturaService: FaturaService,
    private CustomDialogService: CustomDialogService,

    // private dialogRef: MatDialogRef<AlisFaturaComponent>
  ) { }

  async ngOnInit() {

    this.date = new Date;

    const fatura = await this.FaturaService.GetCode()
    this.faturaBelgeNo = fatura.data;
    this.formReferans = `${this.frm.value.seri}-${this.faturaBelgeNo?.kod}`


    var numaralar = [12, 246, 786, 898, 0, 3, 5, 7]
    function name(nums) {
      let max_num = Number.NEGATIVE_INFINITY;
      
      for (let num of nums) {
       
        if (num > max_num) {
          max_num =num

        }
      }
      return max_num;
    }

  console.log(name(numaralar));;

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
    this.alisFaturaItem = event.data;

  }
  onRowUnSelect() {
    this.alisFaturaItem = null
  }

  saveFatura() {
    const model = new CreateFaturaModel();
    model.belgeNo = this.frm.value.belgeNo;
    model.faturaTuru = 1;
    model.seri = this.frm.value.seri;
    model.referans = this.frm.value.referans;
    model.kdv = this.frm.value.kdv;
    model.otv = this.frm.value.otv;
    model.eFatura = this.frm.value.eFatura;
    model.eArsiv = this.frm.value.eArsiv;
    model.aciklama = this.frm.value.aciklama;
    model.cariId = this.cariSelectItem?.id ? this.cariSelectItem?.id : null;
    model.faturaHareketler = this.faturaHareketler;
    this.FaturaService.create(model, () => {
      window.location.reload();
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage)

    })



  }
  faturaHareketler: CreateFaturaHareketModel[] = [];
  faturaHareket: any;

  addStok() {
    this.faturaHareket = {}
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectStokComponent,
      afterClose: () => { }
    },
      (data) => {
        this.faturaHareket.faturaHareketTuru = 1;
        this.faturaHareket.giren = data.giren = 0;
        this.faturaHareket.cikan = data.cikan = 0;
        this.faturaHareket.birimFiyat = data.birimFiyat = 0;
        this.faturaHareket.depoId = this.depoSelectItem?.id ? this.depoSelectItem?.id : "3fa85f64-5717-4562-b3fc-2c963f66afa6";
        this.faturaHareket.stokId = data.id;
        this.faturaHareket.stokAdi = data.ad
        this.faturaHareket.stokKodu = data.kod
        this.faturaHareket.birimAdi = data.birimAdi
        this.faturaHareketler.push(this.faturaHareket);
      }

    )
  }

  deleteFaturaHareket() {
    this.CustomDialogService.deleteDialog(() => {
      var filterTalepHareket = this.faturaHareketler.filter(c => c.stokId != this.alisFaturaItem.stokId);
      this.faturaHareketler = filterTalepHareket;
      if (this.faturaHareketler.length == 0) {
        this.onRowUnSelect();
      }
    })

  }









  cariSelectItem: any;
  cariSelectItemKod: any;
  cariSelectItemAd: any;
  cariChildFunc(item) {
    this.cariSelectItem = item;
    this.cariSelectItemAd = item.ad;
    this.cariSelectItemKod = item.kod;
  }


  depoSelectItem: any;
  depoSelectItemKod: any;
  depoSelectItemAd: any;
  depoChildFunc(item) {
    this.depoSelectItem = item;
    this.depoSelectItemKod = item.kod;
    this.depoSelectItemAd = item.ad;

  }






























  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
