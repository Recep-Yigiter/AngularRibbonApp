import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UrunAgaciCreateModel, UrunAgaciHareketCreateModel } from '../models/urun-agaci-create-model';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectStokComponent } from 'src/app/pages/stok/dialog-select-stok/dialog-select-stok.component';
import { UrunAgaciService } from '../services/urun-agaci.service';
import { UrunAgaciBilesenService } from '../services/urun-agaci-bilesen.service';
import { DialogAddRotaComponent } from '../../rota-plani/dialog-add-rota/dialog-add-rota.component';
import { BilesenRotaService } from '../../rota-plani/services/bilesen-rota.service';

@Component({
  selector: 'app-dialog-update-urun-agaci',
  templateUrl: './dialog-update-urun-agaci.component.html',
  styleUrls: ['./dialog-update-urun-agaci.component.scss']
})
export class DialogUpdateUrunAgaciComponent implements OnInit {

  selectedItem: any;
  urunAgaciItem: any;
  durums: any[] = [
    { key: "Aktif", checked: true },
    { key: "Pasif", checked: false },
    { key: "Tasarım", checked: false }
  ];
  tips: any[] = [{ key: "Montaj", checked: true }, { key: "Proses", checked: false }];
  selectedDurum: string;
  selectedTip: string;
  disabledInput = "background-color:#ebebeb;";
  dataSource: any[];
  dataSourceHarekets: any[];
  urunAgaciKod: any;
  btnDisabledAction: boolean = true;
  getAllUrunAgaci: any;
  getListByIdUrunAgaciBilesen: any;
  getListByIdUrunAgaci: any;
  getUrunAgaci: any;
  bilesenRotalar: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private UrunAgaciService: UrunAgaciService,
    private dialogRef: MatDialogRef<DialogUpdateUrunAgaciComponent>,
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private CustomDialogService: CustomDialogService,
    private UrunAgaciBilesenService: UrunAgaciBilesenService,
    private BilesenRotaService: BilesenRotaService
  ) { }

  async ngOnInit() {
    this.selectedDurum = 'Aktif';
    this.selectedTip = 'Proses';
    this.dataSource = [this.data];
    const fatura = await this.UrunAgaciService.GetCode();
    this.urunAgaciKod = fatura.data.kod;



    this.getListByIdUrunAgaci = await (this.UrunAgaciService.getById(this.data.id))


    this.getListByIdUrunAgaciBilesen = this.getListByIdUrunAgaci.data.urunAgaciBilesenler;

    this.bilesenRotalar = [];
    this.getListByIdUrunAgaciBilesen.forEach(item1 => {
      item1.shm = "Stok";
      item1.ad = item1.stokAdi,
        item1.kod = item1.stokKodu
      item1.bilesenRotalar.forEach(item2 => {

        this.bilesenRotalar.push(item2);
      });
    });
    if (this.getListByIdUrunAgaci.data.urunAgaciBilesenler.length > 0) {
      this.btnDisabledAction = false
    }
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
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


  onSubmit() {
    const model = new UrunAgaciCreateModel();
    model.ad = this.frm.value.urunAgaciAdi;
    model.kod = this.frm.value.urunAgaciKodu;
    model.miktar = 2;
    model.aciklama = "";
    model.stokId = this.stokSelectItem?.id;
    model.parentId = this.data.id;
    model.urunGrubu = this.data.urunGrubu;
    model.urunAgaciBilesenler = this.urunAgaciBilesenler;
    this.urunAgaciBilesenler.forEach((element: any) => {
      element.toplamfiyat = element.birimFiyat * element.miktar;
    })
    const reducer = function (acc, item) {
      return acc + item.toplamfiyat;
    };
    const sum = this.urunAgaciBilesenler.reduce(reducer, 0);
    model.birimFiyat = sum
    this.UrunAgaciService.update(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage);
    })
  }

  urunAgaciBilesenler: UrunAgaciHareketCreateModel[] = [];
  urunAgaciBilesen: any;
  addStok() {
    this.urunAgaciBilesen = {}
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectStokComponent,
      afterClose: () => { }
    },
      (data) => {
        console.log(this.getAllUrunAgaci);
        var item = this.getAllUrunAgaci.filter(c => c.stokId == data.id)
        this.urunAgaciBilesen.shm = "Stok";
        this.urunAgaciBilesen.birimFiyat = data.birimFiyat ? data.birimFiyat : 0;
        this.urunAgaciBilesen.stokId = data.id;
        this.urunAgaciBilesen.stokAdi = data.ad;
        this.urunAgaciBilesen.stokKodu = data.kod
        this.urunAgaciBilesen.birimAdi = data.birimAdi;
        this.urunAgaciBilesen.miktar = 0;
        if (item.length > 0) {
          this.urunAgaciBilesen.tipi = "Yarımamul"
        } else {
          this.urunAgaciBilesen.tipi = "Hammadde"
        }
        this.getListByIdUrunAgaciBilesen.push(this.urunAgaciBilesen);


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


  stokSelectItem: any = this;
  stokSelectItemKod: any;
  stokSelectItemAd: any = this.data.stokAdi;
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


  bilesenRotalari: any;
  rotaGruplama: any[];

  rotaEkle() {
    this.CustomDialogService.normalDialog({
      componentType: DialogAddRotaComponent,
      data: this.getListByIdUrunAgaci.data.urunAgaciBilesenler,
      afterClose: () => { }
    }, (data) => {
      this.bilesenRotalari = data;

      for (let i = 0; i < this.bilesenRotalari.length; i++) {
        for (let t = 0; t < this.bilesenRotalari[i].bilesenRotalar.length; t++) {
          var test = {
            bilesenAdi: this.bilesenRotalari[i].ad,
            operasyonAdi: this.bilesenRotalari[i].bilesenRotalar[t].ad,
            operasyonKodu: this.bilesenRotalari[i].bilesenRotalar[t].kod,
            operasyonId: this.bilesenRotalari[i].bilesenRotalar[t].id,
            operasyonSuresi: 0
          }

          this.bilesenRotalar.push(test);


        }

      }



    })



  }


  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
