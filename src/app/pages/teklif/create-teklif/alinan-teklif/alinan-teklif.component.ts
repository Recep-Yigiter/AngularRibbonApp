import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectStokComponent } from 'src/app/pages/stok/dialog-select-stok/dialog-select-stok.component';
import { StokService } from 'src/app/pages/stok/services/stok.service';
import { TeklifHareketCreateModel } from '../../models/teklif-create-model';

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
  constructor(
    private fb: FormBuilder,
    private CustomDialogService:CustomDialogService
    ) { }
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



  teklifHareketler: TeklifHareketCreateModel[] = [];
  teklifHareket: any;

  addStok() {
    this.teklifHareket = {}
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectStokComponent,
      afterClose: () => { }
    },
      (data) => {
        this.teklifHareket.faturaHareketTuru = 1;
        this.teklifHareket.miktar = data.miktar = 0;
        this.teklifHareket.birimFiyat = data.birimFiyat = 0;
        this.teklifHareket.depoId = this.depoSelectItem?.id ? this.depoSelectItem?.id : "3fa85f64-5717-4562-b3fc-2c963f66afa6";
        this.teklifHareket.stokId = data.id;
        this.teklifHareket.stokAdi = data.ad
        this.teklifHareket.stokKodu = data.kod
        this.teklifHareket.birimAdi = data.birimAdi
        this.teklifHareketler.push(this.teklifHareket);
      }

    )
  }

  deleteTeklifHareket() {
    this.CustomDialogService.deleteDialog(() => {
      var filterTalepHareket = this.teklifHareketler.filter(c => c.stokId != this.alisFaturaItem.stokId);
      this.teklifHareketler = filterTalepHareket;
      if (this.teklifHareketler.length==0) {
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
