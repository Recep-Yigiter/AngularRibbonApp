import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReceteService } from '../services/recete.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { ReceteCreateModel } from '../models/recete-create-model';

@Component({
  selector: 'app-dialog-add-recete',
  templateUrl: './dialog-add-recete.component.html',
  styleUrls: ['./dialog-add-recete.component.scss']
})
export class DialogAddReceteComponent implements OnInit {

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogAddReceteComponent>,
    private ReceteService: ReceteService,
    private CustomDialogService: CustomDialogService
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


  onSubmit() {

    const model = new ReceteCreateModel();
    model.ad = this.frm.value.ad;
    model.kod = this.frm.value.kod;
    model.adet = 1;
    model.miktar = 1;
    model.olcuAciklama = this.frm.value.olcuAciklama ? this.frm.value.olcuAciklama : null;
    model.stokId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    model.durum = model.stokId == '3fa85f64-5717-4562-b3fc-2c963f66afa6' || model.stokId == null ? false : true;
    model.parentId = null;
    model.etkinlik = 1;
    model.active = model.stokId == '3fa85f64-5717-4562-b3fc-2c963f66afa6' || model.stokId == null ? false : true;
    model.receteTuru = "Mamul"

    this.ReceteService.create(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage)
    })




  }

}
