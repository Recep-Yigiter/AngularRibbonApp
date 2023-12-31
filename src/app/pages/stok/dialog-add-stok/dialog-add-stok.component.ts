import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StokService } from '../services/stok.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { StokCreateModel } from '../models/stok-create-model';

@Component({
  selector: 'app-dialog-add-stok',
  templateUrl: './dialog-add-stok.component.html',
  styleUrls: ['./dialog-add-stok.component.scss']
})
export class DialogAddStokComponent implements OnInit {
  selectBirimId: any;
  stokKod:any;
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogAddStokComponent>,
    private customDialogService: CustomDialogService,
    private StokService: StokService) { }

  async ngOnInit() {

    const fatura = await this.StokService.GetCode();
    
    this.stokKod = fatura.data.kod;

  }
  public frm: FormGroup = this.fb.group({

    kod: [null, [Validators.required, Validators.maxLength(16)]],
    ad: [null, [Validators.required, Validators.maxLength(16)]],
    birimFiyat: [null, [Validators.required, Validators.maxLength(16)]],
    aciklama: [null, [Validators.required, Validators.maxLength(16)]],
    stokGrup: [null, [Validators.required, Validators.maxLength(16)]],
    durum: [null, [Validators.required, Validators.maxLength(16)]],
    parentId: [null, [Validators.required, Validators.maxLength(16)]],
    birimId: [null, [Validators.required, Validators.maxLength(16)]],
  });
  get kod() { return this.frm.get('kod') }
  get ad() { return this.frm.get('ad') }
  get birimFiyat() { return this.frm.get('birimFiyat') }
  get aciklama() { return this.frm.get('aciklama') }
  get stokGrup() { return this.frm.get('stokGrup') }
  get durum() { return this.frm.get('durum') }
  get parentId() { return this.frm.get('parentId') }
  get birimId() { return this.frm.get('birimId') }


  selectStokId: any;
  selectStok: any;
  treeViewItems: any;
  stokChildFunc(event) {
    this.selectStokId = event.id;
    this.selectStok = event;
  }


  onSubmit() {
    const model = new StokCreateModel();
    model.ad = this.frm.value.ad;
    model.kod = this.frm.value.kod;
    model.birimFiyat = 0;
    model.stokGrup = null;
    model.aciklama = null;
    model.durum = true;
    model.birimId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    model.parentId = null;
    this.StokService.create(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.customDialogService.errorDialog(errorMessage)
    })
  }

  birimFunc(event) {
    this.selectBirimId = event.id
  }








}
