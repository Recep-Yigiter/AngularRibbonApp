import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepoService } from '../services/depo.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddDepoComponent } from '../dialog-add-depo/dialog-add-depo.component';
import { DepoUpdateModel } from '../models/depo-update-model';
@Component({
  selector: 'app-dialog-update-depo',
  templateUrl: './dialog-update-depo.component.html',
  styleUrls: ['./dialog-update-depo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogUpdateDepoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder, private DepoService: DepoService, private customDialogService: CustomDialogService, private dialogRef: MatDialogRef<DialogAddDepoComponent>) { }

  ngOnInit(): void {
  }
  public frm: FormGroup = this.fb.group({

    kod: [null, [Validators.required, Validators.maxLength(16)]],
    ad: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get kod() { return this.frm.get('kod') }
  get ad() { return this.frm.get('ad') }


  onSubmit() {
    const model=new DepoUpdateModel();
    model.id=this.data.id;
    model.ad= this.frm.value.ad;
    model.kod = this.frm.value.kod;

    this.DepoService.update(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.customDialogService.errorDialog(errorMessage)
    })
  }


}
