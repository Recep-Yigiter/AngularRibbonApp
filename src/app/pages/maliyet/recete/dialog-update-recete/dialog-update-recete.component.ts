import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReceteService } from '../services/recete.service';
import { ReceteUpdateModel } from '../models/recete-update-model';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';

@Component({
  selector: 'app-dialog-update-recete',
  templateUrl: './dialog-update-recete.component.html',
  styleUrls: ['./dialog-update-recete.component.scss']
})
export class DialogUpdateReceteComponent implements OnInit {


  constructor(private fb: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data: any,
     private dialogRef: MatDialogRef<DialogUpdateReceteComponent>, 
     private ReceteService: ReceteService,
     private CustomDialogService:CustomDialogService
     ) { }

  ngOnInit(): void {
console.log(this.data)
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


  onSubmit() {

    const model=new ReceteUpdateModel();
    model.id=this.data.id;
    model.ad = this.frm.value.ad;
    model.kod = this.frm.value.kod;
    model.adet = 1;
    model.miktar = 1;
    model.olcuAciklama = this.frm.value.olcuAciklama ? this.frm.value.olcuAciklama : null;
    model.durum = true;
    model.stokId ="3fa85f64-5717-4562-b3fc-2c963f66afa6";
    model.parentId = null;
    model.etkinlik = 1;
    model.active =  model.stokId == '3fa85f64-5717-4562-b3fc-2c963f66afa6' || model.stokId == null ? false : true;

    if (this.data != undefined) {
      this.frm.value.parentId = this.data.parentId
    }
    else {
      this.frm.value.parentId = null;
    }

    this.ReceteService.update(model, () => {
      this.frm.reset();
      this.dialogRef.close()
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage)
    })

  }

}
