import { Component, Inject, OnInit } from '@angular/core';
import { OperasyonCreateModel } from '../models/operasyon-create-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { OperasyonService } from '../services/operasyon.service';

@Component({
  selector: 'app-dialog-add-operasyon',
  templateUrl: './dialog-add-operasyon.component.html',
  styleUrls: ['./dialog-add-operasyon.component.scss']
})
export class DialogAddOperasyonComponent implements OnInit {
  selectBirimId: any;
  OperasyonKod: any;
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogAddOperasyonComponent>,
    private customDialogService: CustomDialogService,
    private OperasyonService: OperasyonService) { }

  async ngOnInit() {

    const getKod = await this.OperasyonService.GetCode();

    this.OperasyonKod = getKod.data.kod;

  }
  public frm: FormGroup = this.fb.group({

    kod: [null, [Validators.required, Validators.maxLength(16)]],
    ad: [null, [Validators.required, Validators.maxLength(16)]],
    tezgahId: [null, [Validators.required, Validators.maxLength(16)]],
    aciklama: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get kod() { return this.frm.get('kod') }
  get ad() { return this.frm.get('ad') }
  get tezgahId() { return this.frm.get('tezgahId') }
  get aciklama() { return this.frm.get('aciklama') }

  onSubmit() {
    const model = new OperasyonCreateModel();
    model.ad = this.frm.value.ad;
    model.kod = this.frm.value.kod;
    model.tezgahId = this.selectedTezgah.id;


    this.OperasyonService.create(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.customDialogService.errorDialog(errorMessage)
    })
  }



  selectedTezgah: any;
  tezgahChildFunc(item) {
    this.selectedTezgah = item

  }
}
