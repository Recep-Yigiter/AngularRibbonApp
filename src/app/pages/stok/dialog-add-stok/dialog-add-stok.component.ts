import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StokService } from '../services/stok.service';

@Component({
  selector: 'app-dialog-add-stok',
  templateUrl: './dialog-add-stok.component.html',
  styleUrls: ['./dialog-add-stok.component.scss']
})
export class DialogAddStokComponent implements OnInit {
  selectBirimId: any;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DialogAddStokComponent>, private StokService: StokService) { }

  ngOnInit(): void {
    console.log(this.data)
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


  onSubmit(event: any) {

    this.frm.value.ad = this.frm.value.ad,
      this.frm.value.kod = this.frm.value.kod,
      this.frm.value.stokGrup = null,
      this.frm.value.birimFiyat = 0,
      this.frm.value.aciklama = null,
      this.frm.value.durum = false,
      this.frm.value.birimId = "4ea85f64-5717-4562-b3fc-2c963f66afa6",
      this.frm.value.parentId = null,
      this.StokService.create(this.frm.value, () => {
        this.frm.reset();
        this.dialogRef.close()

      }, errorMessage => {
        console.log("Hata....", errorMessage)
        setTimeout(() => {
          console.log("Hata....", errorMessage)
        }, 1000)
      })
  }

  birimFunc(event) {
    this.selectBirimId = event.id
  }








}
