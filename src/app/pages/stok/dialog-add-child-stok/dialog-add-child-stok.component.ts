import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StokService } from '../services/stok.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';

@Component({
  selector: 'app-dialog-add-child-stok',
  templateUrl: './dialog-add-child-stok.component.html',
  styleUrls: ['./dialog-add-child-stok.component.scss']
})
export class DialogAddChildStokComponent implements OnInit {
  selectBirimId: any;
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogAddChildStokComponent>,
    private customDialogService: CustomDialogService,
    private StokService: StokService) { }

  ngOnInit(): void {

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

  onSubmit() {

    this.frm.value.ad = this.frm.value.ad,
      this.frm.value.kod = this.frm.value.kod,
      this.frm.value.stokGrup = this.frm.value.stokGrup,
      this.frm.value.birimFiyat = Number(this.frm.value.birimFiyat),
      this.frm.value.aciklama = null,
      this.frm.value.durum = true,
      this.frm.value.birimId = this.selectBirimId,
      this.frm.value.parentId = this.data.id;
    this.StokService.create(this.frm.value, () => {


      this.data.durum = false;
      this.StokService.update(this.data, () => {
        this.frm.reset();
        this.dialogRef.close()
      })



    }, errorMessage => {
      this.customDialogService.errorDialog(errorMessage)
    })


  }

  birimFunc(event) {
    this.selectBirimId = event.id
  }








}
