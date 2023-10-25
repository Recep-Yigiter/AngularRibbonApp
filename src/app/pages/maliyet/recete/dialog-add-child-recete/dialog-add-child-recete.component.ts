import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReceteService } from '../services/recete.service';
import { ReceteCreateModel } from '../models/recete-create-model';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';

@Component({
  selector: 'app-dialog-add-child-recete',
  templateUrl: './dialog-add-child-recete.component.html',
  styleUrls: ['./dialog-add-child-recete.component.scss']
})
export class DialogAddChildReceteComponent implements OnInit {

  constructor(private fb: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<DialogAddChildReceteComponent>,
       private ReceteService: ReceteService,
       private CustomDialogService:CustomDialogService
       ) { }

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
    parentId: [null],
    etkinlik: [null],

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
  get etkinlik() { return this.frm.get('etkinlik') }



  selectStokId: any;
  selectStokAd: any;
  selectStok: any;
  treeViewChildItems: any;
  stokFunc(event) {
    this.selectStokId = event.id;
    this.selectStokAd = event.ad;
    this.selectStok = event;
  }


  onSubmit() {
    const model = new ReceteCreateModel();
    model.ad = this.frm.value.ad;
    model.kod = this.frm.value.kod;
    model.adet = this.frm.value.adet ? this.frm.value.adet : 1;
    model.miktar = this.frm.value.miktar ? this.frm.value.miktar : 1;
    model.olcuAciklama = this.frm.value.olcuAciklama ? this.frm.value.olcuAciklama : null;
    model.stokId = this.selectStokId ? this.selectStokId : null;
    model.durum = model.stokId == '3fa85f64-5717-4562-b3fc-2c963f66afa6' || model.stokId == null ? false : true;
    model.etkinlik =this.frm.value.etkinlik ? this.frm.value.etkinlik : 1;;
    model.active =  model.stokId == '3fa85f64-5717-4562-b3fc-2c963f66afa6' || model.stokId == null ? false : true;
    model.receteTuru=model.stokId == '3fa85f64-5717-4562-b3fc-2c963f66afa6' || model.stokId == null ? "YariMamul" : "Hammadde";
    model.parentId = this.data.id
    this.ReceteService.create(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage)
    })


  }

}
