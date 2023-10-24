import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BirimService } from 'src/app/core/services/birim/birim.service';

@Component({
  selector: 'app-dialog-add-birim',
  templateUrl: './dialog-add-birim.component.html',
  styleUrls: ['./dialog-add-birim.component.scss']
})
export class DialogAddBirimComponent implements OnInit {

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DialogAddBirimComponent>, private BirimService: BirimService) { }

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


      this.frm.value.ad = this.frm.value.ad;
      this.frm.value.kod = this.frm.value.kod;
      this.frm.value.aciklama = this.frm.value.aciklama;


    this.BirimService.create(this.frm.value, () => { this.frm.reset(); this.dialogRef.close() }, errorMessage => {
      console.log("Hata....", errorMessage)
      setTimeout(() => {
        console.log("Hata....", errorMessage)
      }, 1000)
    })


  }




}
