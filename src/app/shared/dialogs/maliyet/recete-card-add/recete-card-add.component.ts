import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReceteService } from 'src/app/core/services/recete/recete.service';

@Component({
  selector: 'app-recete-card-add',
  templateUrl: './recete-card-add.component.html',
  styleUrls: ['./recete-card-add.component.scss']
})
export class ReceteCardAddComponent  implements OnInit {

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ReceteCardAddComponent>,private ReceteService:ReceteService) { }

  ngOnInit(): void {

  }
  public frm: FormGroup = this.fb.group({

    name: [null],
    stokId: [null],
    stokTuru: [null],
    parentId:[null],
    miktar:[null],
    adet:[null],
    olcu:[null]
    
  });
  get name() { return this.frm.get('name') }
  get stokId() { return this.frm.get('stokId') }
  get stokTuru() { return this.frm.get('stokTuru') }
  get parentId() { return this.frm.get('parentId') }
  get adet() { return this.frm.get('adet') }
  get miktar() { return this.frm.get('miktar') }
  get olcu() { return this.frm.get('olcu') }


  selectStokId: any;
  selectStok: any;
  treeViewItems:any;
  stokFunc(event) {
    this.selectStokId = event.id;
    this.selectStok = event;
  }


  onSubmit(event: any) {

    this.frm.value.stokId=this.selectStok.id
    this.frm.value.stokTuru=this.frm.value.stokTuru.type;
    this.frm.value.miktar=Number(this.frm.value.miktar);
    this.frm.value.adet=Number(this.frm.value.adet);
    this.frm.value.olcu=this.frm.value.olcu?this.frm.value.olcu:null;
    this.frm.value.parentId=null;


    this.treeViewItems=this.frm.value;
    // console.log(this.frm.value)
    this.dialogRef.close()

    this.ReceteService.create(this.frm.value, () => { this.frm.reset(); this.dialogRef.close() }, errorMessage => {
      console.log("Hata....", errorMessage)
      setTimeout(() => {
        console.log("Hata....", errorMessage)
      }, 1000)
    })

    //   const recete = new ReceteUpdateModel();
    //   recete.id = this.data.id;
    //   recete.ad = this.frm.value.receteAd;
    //   recete.kod = this.frm.value.receteKod;
    //   recete.receteCategoriId = this.selectReceteCategoriId ? this.selectReceteCategoriId : this.data.receteCategoriId
    //   this.receteService.update(recete, () => { this.frm.reset(); this.dialogRef.close() }, errorMessage => {
    //     console.log("Hata....", errorMessage)
    //     setTimeout(() => {
    //       console.log("Hata....", errorMessage)
    //     }, 1000)
    //   })
  }

}
