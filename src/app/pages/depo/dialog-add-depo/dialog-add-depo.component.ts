import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepoService } from '../services/depo.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DepoCreateModel } from '../models/depo-create-model';
@Component({
  selector: 'app-dialog-add-depo',
  templateUrl: './dialog-add-depo.component.html',
  styleUrls: ['./dialog-add-depo.component.scss']
})
export class DialogAddDepoComponent implements OnInit {

  constructor(private fb: FormBuilder, private DepoService: DepoService, private customDialogService: CustomDialogService, private dialogRef: MatDialogRef<DialogAddDepoComponent>) { }

  ngOnInit(): void {
  }
  public frm: FormGroup = this.fb.group({

    kod: [null, [Validators.required, Validators.maxLength(16)]],
    ad: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get kod() { return this.frm.get('kod') }
  get ad() { return this.frm.get('ad') }


  onSubmit() {
    const model=new DepoCreateModel();

    model.ad= this.frm.value.ad;
    model.kod = this.frm.value.kod;

    this.DepoService.create(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.customDialogService.errorDialog(errorMessage)
    })
  }





}
