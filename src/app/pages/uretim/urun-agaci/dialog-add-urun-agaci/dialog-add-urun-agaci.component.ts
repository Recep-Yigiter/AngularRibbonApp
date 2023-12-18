import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UrunAgaciCreateModel, UrunAgaciHareketCreateModel } from '../models/urun-agaci-create-model';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectStokComponent } from 'src/app/pages/stok/dialog-select-stok/dialog-select-stok.component';
import { UrunAgaciService } from '../services/urun-agaci.service';

@Component({
  selector: 'app-dialog-add-urun-agaci',
  templateUrl: './dialog-add-urun-agaci.component.html',
  styleUrls: ['./dialog-add-urun-agaci.component.scss']
})
export class DialogAddUrunAgaciComponent implements OnInit {

  selectedItem: any;
  urunAgaciItem: any;
  durums: any[] = [{ key: "Aktif", checked: true }, { key: "Pasif", checked: false }, { key: "Tasarım", checked: false }];
  tips: any[] = [{ key: "Montaj", checked: true }, { key: "Proses", checked: false }];
  selectedDurum: string;
  selectedTip: string;
  disabledInput = "background-color:#ebebeb;";
  dataSource: any[];
  dataSourceHarekets: any[];
  urunAgaciKod:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private UrunAgaciService: UrunAgaciService,
    private dialogRef: MatDialogRef<DialogAddUrunAgaciComponent>,
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private CustomDialogService: CustomDialogService
  ) { }

 async ngOnInit() {
    this.selectedDurum = 'Aktif';
    this.selectedTip = 'Proses';
    this.dataSource = [{ ad: "", miktar: 0 }];

    const fatura = await this.UrunAgaciService.GetCode();
    
    this.urunAgaciKod= fatura.data.kod;
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
    model.parentId = null;
    model.urunGrubu=this.data;
    model.urunAgaciBilesenler = this.urunAgaciHareketler;

    this.UrunAgaciService.create(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage)
    })
  }

  urunAgaciHareketler: UrunAgaciHareketCreateModel[] = [];
  urunAgaciHareket: any;
  addStok() {
    this.urunAgaciHareket = {}
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectStokComponent,
      afterClose: () => { }
    },
      (data) => {
        this.urunAgaciHareket.shm = "Stok";
        this.urunAgaciHareket.birimFiyat = data.birimFiyat = 0;
        this.urunAgaciHareket.stokId = data.id;
        this.urunAgaciHareket.ad = data.ad;
        this.urunAgaciHareket.kod = data.kod
        this.urunAgaciHareket.birimAdi = data.birimAdi;
        this.urunAgaciHareket.miktar = data.birimFiyat = 0;
        this.urunAgaciHareketler.push(this.urunAgaciHareket);
      }

    )
  }

  deleteUrunAgaciHareket() {
    this.CustomDialogService.deleteDialog(() => {
      var filterTalepHareket = this.urunAgaciHareketler.filter(c => c.stokId != this.urunAgaciHareket.stokId);
      this.urunAgaciHareketler = filterTalepHareket;
      if (this.urunAgaciHareketler.length == 0) {
        this.onRowUnSelect();
      }
    })

  }




















  stokSelectItem: any;
  stokSelectItemKod: any;
  stokSelectItemAd: any;
  stokChildFunc(item) {
    this.stokSelectItem = item;
    this.stokSelectItemAd = item.ad;
    this.stokSelectItemKod = item.kod;
    this.stokSelectItem.shm = "Stok";
    this.dataSource = [];
    this.stokSelectItem.miktar = 0;
    this.dataSource.push(this.stokSelectItem);
  }











  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
