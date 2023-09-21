import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stok-card-update',
  templateUrl: './stok-card-update.component.html',
  styleUrls: ['./stok-card-update.component.scss']
})
export class StokCardUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<StokCardUpdateComponent>,) { }

  ngOnInit(): void {
  }
  public frm: FormGroup = this.fb.group({

    hareketAdi: [null, [Validators.required, Validators.maxLength(16)]],
    stokId: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
  });
  get hareketAdi() { return this.frm.get('hareketAdi') }
  get stokId() { return this.frm.get('stokId') }


  selectStokId: any;
  selectStok: any;
  treeViewItems:any;
  stokChildFunc(event) {
    this.selectStokId = event.id;
    this.selectStok = event;
  }


  onSubmit(event: any) {

    this.treeViewItems=this.frm.value
    this.dialogRef.close()


  }

}
