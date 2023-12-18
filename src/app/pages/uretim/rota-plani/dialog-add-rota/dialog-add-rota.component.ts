import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OperasyonService } from '../../operasyon/services/operasyon.service';

@Component({
  selector: 'app-dialog-add-rota',
  templateUrl: './dialog-add-rota.component.html',
  styleUrls: ['./dialog-add-rota.component.scss']
})
export class DialogAddRotaComponent implements OnInit {
  rotaItem: any;

  selectedItem: any;
  selectedItems: any[];
  dataSourceRota: any;
  btnDisabledAction: boolean = true;

  bilesenRotaGruplari: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: DialogRef,
    private OperasyonService: OperasyonService
  ) { }

  async ngOnInit() {


    this.isChecked = []
    this.dataSourceRota = (await this.OperasyonService.GetList()).data.items

    this.bilesenRotaGruplari = [];
    this.data.forEach(element1 => {
      this.dataSourceRota.forEach(element2 => {
        let test = {
          bilesenAdi: element1.ad,
          stokId: element1.stokId,
          operasyonId: element2.id,
          operasyonAdi: element2.ad,
          operasyonKodu: element2.kod,
          operasyonSuresi: 0,
          dataKey: element1.stokId + ' ' + element2.ad,
        }
        this.bilesenRotaGruplari.push(test);
      });


    });


    var test = {
      bilesenAdi: "1.5  mm DKP SAC",
      dataKey: "8548be78-5185-4054-d9c9-08dbdebfff4f BÜKÜM",
      operasyonAdi: "BÜKÜM",
      operasyonId: "a4d2e965-1a2a-4c5b-b637-08dbfa11aa4b",
      operasyonKodu: "0000000000000001",
      operasyonSuresi: 0,
      stokId: "8548be78-5185-4054-d9c9-08dbdebfff4f"
    }

    this.isChecked.push(test)


    // this.isChecked = [];
    // this.data.forEach(item1 => {
    //   item1.shm = "Stok";
    //   if (item1.bilesenRotalar.length > 0) {
    //     item1.bilesenRotalar.forEach(item2 => {

    //       let params = {
    //         bilesenAdi: item1.ad,
    //         stokId: item1.stokId,
    //         operasyonId: item2.operasyonId,
    //         operasyonAdi: item2.operasyonAdi,
    //         operasyonKodu: item2.operasyonKodu,
    //         operasyonSuresi: 0,
    //         dataKey: item1.stokId + ' ' + item2.ad,
    //       }
    //       this.isChecked.push(params);

    //     });
    //   }
    // });

    // console.log(this.isChecked);
    console.log(this.bilesenRotaGruplari);
  }


  onRowSelect(event: any) {
    this.rotaItem = event.data;
    this.isChecked = this.selectedItem.bilesenRotalar
  }
  onRowUnSelect() { this.rotaItem = null; }

  _selectedDataItem: any;
  onSubmit() {

    this._selectedDataItem = this.data;
    // this.dialogRef.close({ data: this._selectedDataItem })
  }


  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

  isChecked: any[];

  changeCheckmark(boolEvt, operasyon) {

    this.isChecked = this.data.filter(c => c.stokId == operasyon.stokId)[0].bilesenRotalar;

    let params = {
      stokId: operasyon.stokId,
      operasyonId: operasyon.operasyonId,
      urunAgacibilesenId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      operasyonSuresi: operasyon.operasyonSuresi,
      operasyonAdi: operasyon.operasyonAdi,
      operasyonKodu: operasyon.operasyonKodu
    }
    if (boolEvt.checked) {
      this.isChecked.push(params);

    } else {
      for (let index = 0; index < this.isChecked.length; index++) {
        const element = this.isChecked[index];

        if (element.id == operasyon.id) {
          this.isChecked.splice(index, 1);
        }
      }
    }


    if (this.isChecked.length > 0) {
      this.btnDisabledAction = false
    }
  }








}
