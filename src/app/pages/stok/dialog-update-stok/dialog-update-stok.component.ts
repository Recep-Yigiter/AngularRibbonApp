import { Component, OnInit ,Inject, ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StokService } from '../services/stok.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { StokUpdateModel } from '../models/stok-update-model';
@Component({
  selector: 'app-dialog-update-stok',
  templateUrl: './dialog-update-stok.component.html',
  styleUrls: ['./dialog-update-stok.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogUpdateStokComponent implements OnInit {

  constructor(private fb: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public data: any, 
     private dialogRef: MatDialogRef<DialogUpdateStokComponent>,
     private StokService:StokService,
     private customDialogService:CustomDialogService) { }

  ngOnInit(): void {
  }
  public frm: FormGroup = this.fb.group({
    ad: [null, [Validators.required, Validators.maxLength(16)]],
    kod: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
  });
  get ad() { return this.frm.get('ad') }
  get kod() { return this.frm.get('kod') }




  onSubmit() {
    const model=new StokUpdateModel();
    model.id=this.data.id;
    model.ad= this.frm.value.ad;
    model.kod = this.frm.value.kod;
    model.birimFiyat=0;
    model.stokGrup= null;
    model.aciklama= null;
    model.durum= false;
    model.birimId= "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    model.parentId= this.data.parentId;

    this.StokService.update(model, () => {
      this.frm.reset();
      this.dialogRef.close()
    }, errorMessage => {
      this.customDialogService.errorDialog(errorMessage)
    })
  }

}
