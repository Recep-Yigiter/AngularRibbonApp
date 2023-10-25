import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BirimService } from 'src/app/core/services/birim/birim.service';
import { BirimUpdateModel } from '../models/birim-update-model';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';

@Component({
  selector: 'app-dialog-update-birim',
  templateUrl: './dialog-update-birim.component.html',
  styleUrls: ['./dialog-update-birim.component.scss']
})
export class DialogUpdateBirimComponent implements OnInit {

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogUpdateBirimComponent>,
    private BirimService: BirimService,
    private CustomDialogService: CustomDialogService) { }

  ngOnInit(): void {

  }
  public frm: FormGroup = this.fb.group({

    ad: [null],
    kod: [null],
    aciklama: [null],


  });
  get ad() { return this.frm.get('ad') }
  get kod() { return this.frm.get('kod') }
  get aciklama() { return this.frm.get('aciklama') }




  onSubmit() {
    const model = new BirimUpdateModel();

    model.id = this.data.id;
    model.ad = this.frm.value.ad;
    model.kod = this.frm.value.kod;
    model.aciklama = this.frm.value.aciklama;

    this.BirimService.update(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.CustomDialogService.errorDialog(errorMessage)
    })
  }




}
