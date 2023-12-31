import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TalepService } from '../services/talep.service';
import { CreateTalepHareketModel, CreateTalepModel } from '../models/create-talep.model';
import { DialogSelectStokComponent } from '../../stok/dialog-select-stok/dialog-select-stok.component';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';

@Component({
  selector: 'app-create-talep',
  templateUrl: './create-talep.component.html',
  styleUrls: ['./create-talep.component.scss']
})
export class CreateTalepComponent implements OnInit {
  alisFaturaItem: any;
  dataSource: any;
  selectedItem: any;
  date: Date;
  defaultDurum: any = { name: "Onay Bekliyor" }
  defaultFiyat = 0;
  TalepSeri: any = "TLP";
  TalepNo: any;
  formReferans: any;
  totalTalepHareket: any;
  constructor(private fb: FormBuilder,
    private FaturaService: TalepService,
    private CustomDialogService: CustomDialogService

    // private dialogRef: MatDialogRef<AlisFaturaComponent>
  ) { }

  async ngOnInit() {

    this.date = new Date;

    const fatura = await this.FaturaService.GetCode()
    this.TalepNo = fatura.data;
    this.formReferans = `${this.TalepNo?.kod}`

  }


  public frm: FormGroup = this.fb.group({
    tarih: [null, [Validators.required, Validators.maxLength(16)]],
    seri: [null, [Validators.required, Validators.maxLength(16)]],
    talepNo: [null, [Validators.required, Validators.maxLength(16)]],
    talepNedeni: [null, [Validators.required, Validators.maxLength(16)]],
    duzenleyen: [null, [Validators.required, Validators.maxLength(16)]],
    cariKod: [null, [Validators.required, Validators.maxLength(16)]],
    aciklama: [null, [Validators.required, Validators.maxLength(16)]],
    durum: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get tarih() { return this.frm.get('tarih') }
  get seri() { return this.frm.get('seri') }
  get talepNo() { return this.frm.get('talepNo') }
  get talepNedeni() { return this.frm.get('talepNedeni') }
  get duzenleyen() { return this.frm.get('duzenleyen') }
  get aciklama() { return this.frm.get('aciklama') }
  get durum() { return this.frm.get('durum') }

  onRowSelect(event: any) {
    this.alisFaturaItem = event.data;

  }
  onRowUnSelect() {
    this.alisFaturaItem = null
  }

  saveTalep() {
    const model = new CreateTalepModel();
    model.talepNo = this.formReferans;
    model.departman = "Kalite Kontrol"
    model.talepNedeni = this.frm.value.talepNedeni;
    model.aciklama = this.frm.value.aciklama;
    model.TalepHareketler = this.TalepHareketler;

    this.FaturaService.create(model, () => {
      window.location.reload();
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage)

    })



  }
  TalepHareketler: CreateTalepHareketModel[] = [];
  TalepHareket: CreateTalepHareketModel;

  addTalepHareket() {
    this.TalepHareket = {}
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectStokComponent,
      afterClose: () => { }
    },
      (data) => {
        data.talepMiktari = 0;
        data.talepBirimi = data.birimAdi;
        data.stokId = data.id;
        data.cariId = this.cariSelectItem?.id;
        data.cariKodu = this.cariSelectItemKod;
        data.cariAdi = this.cariSelectItem?.ad;
        this.TalepHareketler.push(data);
        this.totalTalepHareket = this.TalepHareketler.length;
      }

    )


  }


  deleteTalepHareket() {
    this.CustomDialogService.deleteDialog(() => {
      var filterTalepHareket = this.TalepHareketler.filter(c => c.stokId != this.alisFaturaItem.stokId);
      this.TalepHareketler = filterTalepHareket;
      if (this.TalepHareketler.length==0) {
        this.onRowUnSelect();
      }
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
