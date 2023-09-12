import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stok-card-add',
  templateUrl: './stok-card-add.component.html',
  styleUrls: ['./stok-card-add.component.scss']
})
export class StokCardAddComponent implements OnInit {

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<StokCardAddComponent>,) { }

  ngOnInit(): void {
  }
  public frm: FormGroup = this.fb.group({

    hareketAdi: [null, [Validators.required, Validators.maxLength(16)]],
    stokId: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
  });
  get hareketAdi() { return this.frm.get('hareketAdi') }
  get stokId() { return this.frm.get('stokId') }


  selectStokId: any;
  selectStok: any;
  treeViewItems:any;
  stokChildFunc(event) {
    this.selectStokId = event.id;
    this.selectStok = event;
  }


  onSubmit(event: any) {

    this.treeViewItems=this.frm.value
    this.dialogRef.close()

    //   const recete = new ReceteUpdateModel();
    //   recete.id = this.data.id;
    //   recete.ad = this.frm.value.receteAd;
    //   recete.kod = this.frm.value.receteKod;
    //   recete.receteCategoriId = this.selectReceteCategoriId ? this.selectReceteCategoriId : this.data.receteCategoriId
    //   this.receteService.update(recete, () => { this.frm.reset(); this.dialogRef.close() }, errorMessage => {
    //     console.log("Hata....", errorMessage)
    //     setTimeout(() => {
    //       console.log("Hata....", errorMessage)
    //     }, 1000)
    //   })
  }

}
