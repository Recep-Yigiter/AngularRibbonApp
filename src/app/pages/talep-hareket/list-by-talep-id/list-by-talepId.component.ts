import { Component, OnInit,Inject } from '@angular/core';
import { CreateTalepModel } from '../../talep/models/create-talep.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StokDialogService } from '../../stok/services/stok-dialog.service';
import { TalepHareketService } from '../services/talep-hareket.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-list-by-talepId',
  templateUrl: './list-by-talepId.component.html',
  styleUrls: ['./list-by-talepId.component.scss']
})
export class ListByTalepIdComponent implements OnInit {
  alisFaturaItem: any;
  dataSource: any;
  selectedItem: any;
  date: Date;
  defaultDurum: any = { name: "Onay Bekliyor" }
  defaultFiyat = 0;
  TalepSeri: any = "TLP";
  TalepNo: any;
  formReferans: any;
  constructor(private fb: FormBuilder,
    private stokDialogService: StokDialogService,
    private TalepHareketService:TalepHareketService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private dialogRef: MatDialogRef<AlisFaturaComponent>
  ) { }

  async ngOnInit() {

    this.date = new Date;
    this.getAllTalep();



  }

  public frm: FormGroup = this.fb.group({
    tarih: [null, [Validators.required, Validators.maxLength(16)]],
    seri: [null, [Validators.required, Validators.maxLength(16)]],
    talepNo: [null, [Validators.required, Validators.maxLength(16)]],
    talepNedeni: [null, [Validators.required, Validators.maxLength(16)]],
    cariId: [null, [Validators.required, Validators.maxLength(16)]],
    duzenleyen: [null, [Validators.required, Validators.maxLength(16)]],
    cariKod: [null, [Validators.required, Validators.maxLength(16)]],
    aciklama: [null, [Validators.required, Validators.maxLength(16)]],
    durum: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get tarih() { return this.frm.get('tarih') }
  get seri() { return this.frm.get('seri') }
  get talepNo() { return this.frm.get('talepNo') }
  get talepNedeni() { return this.frm.get('talepNedeni') }
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

  saveTalep() {
    // var DateObj = new Date();
    // this.frm.value.tarih= DateObj.getFullYear() + '/' + ('0' + (DateObj.getMonth() + 1)).slice(-2) + '/' + ('0' + DateObj.getDate()).slice(-2);
    // this.frm.value.otv=this.frm.value.otv.name
    this.frm.value.cariId = this.cariSelectItem?.id;

    const model = new CreateTalepModel();
    model.talepNo = this.formReferans;
    model.departman = "Kalite Kontrol"
    model.talepNedeni = this.frm.value.talepNedeni;
    model.aciklama = this.frm.value.aciklama;
    model.TalepHareketler = this.TalepHareketler;

    


  }
  TalepHareketler: CreateTalepModel[] = [];
  TalepHareket: CreateTalepModel;

  addStok() {
    this.TalepHareket = {}
    if (this.cariSelectItem != null) {
      this.stokDialogService.selectDialog((data) => {
        data.talepMiktari = 0;
        data.talepBirimi = data.birimAdi;
        data.stokId = data.id;
        data.cariId = this.cariSelectItem?.id;
        data.cariKodu = this.cariSelectItemKod;
        data.cariAdi = this.cariSelectItem?.ad;
        this.TalepHareketler.push(data);
      })
    }

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




  async getAllTalep(){
  const list=await this.TalepHareketService.GetList(()=>{});
    this.dataSource=list.data.items.reduce((acc,item)=>{
      if (this.data.id==item.talepId) {
        acc.push(item);
      }
      return acc;
    },[]);


  }



  onSubmit(event){

  }

























  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
