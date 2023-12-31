import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReceteService } from 'src/app/pages/maliyet/recete/services/recete.service';

@Component({
  selector: 'app-recete-card-update',
  templateUrl: './recete-card-update.component.html',
  styleUrls: ['./recete-card-update.component.scss']
})
export class ReceteCardUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ReceteCardUpdateComponent>, private ReceteService: ReceteService) { }

  ngOnInit(): void {

  }
  public frm: FormGroup = this.fb.group({
    id: [null],
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
  get receteTuru() { return this.frm.get('receteTuru') }
  get parentId() { return this.frm.get('parentId') }
  get adet() { return this.frm.get('adet') }
  get miktar() { return this.frm.get('miktar') }
  get olcuAciklama() { return this.frm.get('olcuAciklama') }
  get durum() { return this.frm.get('durum') }
  get stokId() { return this.frm.get('stokId') }



  selectStokId: any;
  selectStok: any;
  treeViewChildItems: any;
  stokFunc(event) {
    this.selectStokId = event.id;
    this.selectStok = event;
  }


  onSubmit(event: any) {

    this.frm.value.id = this.data.id;
    this.frm.value.ad = this.frm.value.ad;
    this.frm.value.kod = this.frm.value.kod;
    this.frm.value.receteTuru = this.frm.value.receteTuru.type;
    this.frm.value.adet = this.frm.value.adet ? this.frm.value.adet : 1;
    this.frm.value.miktar = this.frm.value.miktar ? this.frm.value.miktar : 1;
    this.frm.value.olcuAciklama = this.frm.value.olcuAciklama ? this.frm.value.olcuAciklama : null;
    this.frm.value.durum = true;
    this.frm.value.stokId = this.selectStokId ? this.selectStokId : null;
    if (this.data != undefined) {
      this.frm.value.parentId = this.data.parentId
    }
    else {
      this.frm.value.parentId = null;
    }


    this.ReceteService.update(this.frm.value, () => { this.frm.reset(); this.dialogRef.close() }, errorMessage => {
      console.log("Hata....", errorMessage)
      setTimeout(() => {
        console.log("Hata....", errorMessage)
      }, 1000)
    })


  }

}
