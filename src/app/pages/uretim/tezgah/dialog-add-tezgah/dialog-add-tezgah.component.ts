import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { TezgahService } from '../services/tezgah.service';
import { TezgahCreateModel } from '../models/tezgah-create-model';
@Component({
  selector: 'app-dialog-add-tezgah',
  templateUrl: './dialog-add-tezgah.component.html',
  styleUrls: ['./dialog-add-tezgah.component.scss']
})
export class DialogAddTezgahComponent implements OnInit {
  selectBirimId: any;
  TezgahKod:any;
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogAddTezgahComponent>,
    private customDialogService: CustomDialogService,
    private TezgahService: TezgahService) { }

  async ngOnInit() {

    const fatura = await this.TezgahService.GetCode();
    
    this.TezgahKod = fatura.data.kod;

  }
  public frm: FormGroup = this.fb.group({

    kod: [null, [Validators.required, Validators.maxLength(16)]],
    ad: [null, [Validators.required, Validators.maxLength(16)]],
    tezgahGucu: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get kod() { return this.frm.get('kod') }
  get ad() { return this.frm.get('ad') }
  get tezgahGucu() { return this.frm.get('tezgahGucu') }



  selectTezgahId: any;
  selectTezgah: any;
  treeViewItems: any;
  TezgahChildFunc(event) {
    this.selectTezgahId = event.id;
    this.selectTezgah = event;
  }


  onSubmit() {
    const model = new TezgahCreateModel();
    model.ad = this.frm.value.ad;
    model.kod = this.frm.value.kod;
    model.tezgahGucu = this.frm.value.tezgahGucu;

    this.TezgahService.create(model, () => {
      this.frm.reset();
      this.dialogRef.close({ data: model });
    }, errorMessage => {
      this.customDialogService.errorDialog(errorMessage)
    })


    
  }









}
