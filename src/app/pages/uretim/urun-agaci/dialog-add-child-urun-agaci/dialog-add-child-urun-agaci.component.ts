import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UrunAgaciCreateModel, UrunAgaciHareketCreateModel } from '../models/urun-agaci-create-model';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectStokComponent } from 'src/app/pages/stok/dialog-select-stok/dialog-select-stok.component';
import { UrunAgaciService } from '../services/urun-agaci.service';
import { UrunAgaciBilesenService } from '../services/urun-agaci-bilesen.service';
import { DialogAddRotaComponent } from '../../rota-plani/dialog-add-rota/dialog-add-rota.component';

@Component({
  selector: 'app-dialog-add-child-urun-agaci',
  templateUrl: './dialog-add-child-urun-agaci.component.html',
  styleUrls: ['./dialog-add-child-urun-agaci.component.scss']
})
export class DialogAddChildUrunAgaciComponent implements OnInit {

  selectedItem: any;
  urunAgaciItem: any;
  durums: any[] = [{ key: "Aktif", checked: true }, { key: "Pasif", checked: false }, { key: "Tasarım", checked: false }];
  tips: any[] = [{ key: "Montaj", checked: true }, { key: "Proses", checked: false }];
  selectedDurum: string;
  selectedTip: string;
  disabledInput = "background-color:#ebebeb;";
  dataSource: any[];
  dataSourceHarekets: any[];
  urunAgaciKod: any;
  btnDisabledAction: boolean = true;
  getAllUrunAgaciBilesen: any;
  getAllUrunAgaci: any;
 
  stokSelectItem: any;
  stokSelectItemKod: any;
  stokSelectItemAd: any;
  rotaGruplama: any[];
  urunAgaciBilesenler: any[] = [];
  urunAgaciBilesen: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private UrunAgaciService: UrunAgaciService,
    private dialogRef: MatDialogRef<DialogAddChildUrunAgaciComponent>,
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private CustomDialogService: CustomDialogService,
    private UrunAgaciBilesenService: UrunAgaciBilesenService
  ) { }

  async ngOnInit() {
    this.selectedDurum = 'Aktif';
    this.selectedTip = 'Proses';
    this.dataSource = [{ ad: "", miktar: 0 }];
    const fatura = await this.UrunAgaciService.GetCode();
    this.urunAgaciKod = fatura.data.kod;

    this.getAllUrunAgaciBilesen = (await this.UrunAgaciBilesenService.GetList()).data.items;
    this.getAllUrunAgaci = (await this.UrunAgaciService.GetList()).data.items;
  }



  public frm: FormGroup = this.fb.group({
    ustUrunAgaciAdi: [null, [Validators.required, Validators.maxLength(16)]],
    ustUrunAgaciKodu: [null, [Validators.required, Validators.maxLength(16)]],
    urunAgaciAdi: [null, [Validators.required, Validators.maxLength(16)]],
    urunAgaciKodu: [null, [Validators.required, Validators.maxLength(16)]],
    stokUrunAgaci: [null, [Validators.required, Validators.maxLength(16)]],
    stokUrunAgaciHareket: [null, [Validators.required, Validators.maxLength(16)]],
  });
  get ustUrunAgaciAdi() { return this.frm.get('ustUrunAgaciAdi') }
  get ustUrunAgaciKodu() { return this.frm.get('ustUrunAgaciKodu') }
  get urunAgaciAdi() { return this.frm.get('urunAgaciAdi') }
  get urunAgaciKodu() { return this.frm.get('urunAgaciKodu') }
  get stokUrunAgaci() { return this.frm.get('stokUrunAgaci') }
  get stokUrunAgaciHareket() { return this.frm.get('stokUrunAgaciHareket') }

 
  onRowSelect(event: any) { this.urunAgaciItem = event.data; }
  onRowUnSelect() { this.urunAgaciItem = null; }
  durumChange(item) { this.selectedDurum = item; }
  tipChange(item) { this.selectedTip = item; }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  onSubmit() {

    const model = new UrunAgaciCreateModel();
    model.ad = this.frm.value.urunAgaciAdi;
    model.kod = this.frm.value.urunAgaciKodu;
    model.miktar = 1;
    model.aciklama = "";
    model.durum = true;
    model.stokId = this.stokSelectItem?.id;
    model.parentId = this.data.id;
    model.urunGrubu = this.data.urunGrubu;
    model.tip = this.selectedTip;
    model.durum = this.selectedDurum;
    model.urunAgaciBilesenler = this.urunAgaciBilesenler;
    this.urunAgaciBilesenler.forEach((element: any) => {
      element.toplamfiyat = element.birimFiyat * element.miktar;
    })
    const reducer = function (acc, item) {
      return acc + item.toplamfiyat;
    };
    const sum = this.urunAgaciBilesenler.reduce(reducer, 0);

    model.birimFiyat = sum;


    this.UrunAgaciService.create(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage);
    })
  }
  addStok() {
    this.urunAgaciBilesen = {}
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectStokComponent,
      afterClose: () => { }
    },
      (data) => {
        var item = this.getAllUrunAgaci.filter(c => c.stokId == data.id)

        this.urunAgaciBilesen.kod = data.kod,
        this.urunAgaciBilesen.aciklama = null,
        this.urunAgaciBilesen.ad = data.ad,
        this.urunAgaciBilesen.aciklama = data.aciklama,
        this.urunAgaciBilesen.bilesenRotalar = [],
        this.urunAgaciBilesen.birimAdi = data.birimAdi;
        this.urunAgaciBilesen.birimFiyat = data.birimFiyat ? data.birimFiyat : 0;
        this.urunAgaciBilesen.fiyatListesiId = null;
        this.urunAgaciBilesen.fire = 0;
        this.urunAgaciBilesen.miktar = 0;
        this.urunAgaciBilesen.oranMiktar = 0;
        this.urunAgaciBilesen.shm = "Stok";
        this.urunAgaciBilesen.stokId = data.id;
        this.urunAgaciBilesen.stokAdi = data.ad;
        this.urunAgaciBilesen.stokKodu = data.kod
        if (item.length > 0) {
          this.urunAgaciBilesen.tipi = "Yarımamul"
        } else {
          this.urunAgaciBilesen.tipi = "Hammadde"
        }

        this.urunAgaciBilesen.bilesenRotalar = []
        this.urunAgaciBilesenler.push(this.urunAgaciBilesen);
      }

    )
  }
  deleteUrunAgaciHareket() {
    this.CustomDialogService.deleteDialog(() => {
      var filterTalepHareket = this.urunAgaciBilesenler.filter(c => c.stokId != this.urunAgaciBilesen.stokId);
      this.urunAgaciBilesenler = filterTalepHareket;
      if (this.urunAgaciBilesenler.length == 0) {
        this.onRowUnSelect();
      }
    })

  }
  stokChildFunc(item) {

    if (this.frm.value.urunAgaciAdi == undefined || this.frm.value.urunAgaciAdi == '' || this.frm.value.urunAgaciAdi == null) {
      this.CustomDialogService.errorDialog("Lütfen önce ürün ağacı adını giriniz..")
    }
    else {
      this.stokSelectItem = item;
      this.stokSelectItemAd = item.ad;
      this.stokSelectItemKod = item.kod;
      this.stokSelectItem.shm = "Stok";
      this.dataSource = [];
      this.stokSelectItem.miktar = 0;
      this.dataSource.push(this.stokSelectItem);

      this.btnDisabledAction = false;
    }

  }
  rotaEkle() {

    this.CustomDialogService.normalDialog({
      componentType: DialogAddRotaComponent,
      data: this.urunAgaciBilesenler,
      afterClose: () => { }
    }, (data) => {

      this.rotaGruplama = data;
      for (let bilesen of this.urunAgaciBilesenler) {
        bilesen.bilesenRotalar = []
        for (let rotaGrup of data) {
          if (bilesen.stokId==rotaGrup.stokId) {
            bilesen.bilesenRotalar.push(rotaGrup)
          }
        
        }
      }



    })



  }
  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
