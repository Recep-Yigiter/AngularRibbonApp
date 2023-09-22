import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReceteService } from 'src/app/core/services/recete/recete.service';

@Component({
  selector: 'app-recete-card-add',
  templateUrl: './recete-card-add.component.html',
  styleUrls: ['./recete-card-add.component.scss']
})
export class ReceteCardAddComponent implements OnInit {

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ReceteCardAddComponent>, private ReceteService: ReceteService) { }

  ngOnInit(): void {

  }
  public frm: FormGroup = this.fb.group({

    ad: [null],
    kod: [null],
    receteTuru: [null],
    adet: [null],
    miktar: [null],
    olcuAciklama: [null],
    durum: [null],
    stokId: [null],
    parentId: [null]

  });
  get ad() { return this.frm.get('ad') }
  get kod() { return this.frm.get('kod') }
  get olcuAciklama() { return this.frm.get('olcuAciklama') }

  selectStokId: any;
  selectStok: any;
  treeViewItems: any;
  stokFunc(event) {
    this.selectStokId = event.id;
    this.selectStok = event;
  }


  onSubmit(event: any) {


      this.frm.value.ad = this.frm.value.ad,
      this.frm.value.kod = this.frm.value.ad,
      this.frm.value.receteTuru = "Ticari Mal",
      this.frm.value.adet = 1,
      this.frm.value.miktar = 1,
      this.frm.value.olcuAciklama = this.frm.value.olcuAciklama ? this.frm.value.olcuAciklama : null,
      this.frm.value.durum = true,
      this.frm.value.stokId = null,
      this.frm.value.parentId = null,
    this.ReceteService.create(this.frm.value, () => { this.frm.reset(); this.dialogRef.close() }, errorMessage => {
      console.log("Hata....", errorMessage)
      setTimeout(() => {
        console.log("Hata....", errorMessage)
      }, 1000)
    })


  }

}
