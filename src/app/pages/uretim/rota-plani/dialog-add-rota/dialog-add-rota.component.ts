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
  dataSource: any;
  operasyonList: any;
  selectedDataSource: any[];
  _selectedDataItem: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: DialogRef,
    private OperasyonService: OperasyonService
  ) { }

  async ngOnInit() {


    this.operasyonList = (await this.OperasyonService.GetList()).data.items;

    this.dataSource = [];
    this.data.forEach(element1 => {
      if (element1.bilesenRotalar.length>0) {
        element1.bilesenRotalar.forEach(element2 => {
          this.operasyonList.forEach(element3 => {
      
            let test = {
              bilesenAdi: element1.ad,
              stokId: element1.stokId,
              operasyonId: element3.id,
              operasyonAdi: element3.ad,
              operasyonKodu: element3.kod,
              tezgahAdi: element3.tezgahAdi,
              tezgahGucu: element3.tezgahGucu,
              operasyonSuresi:this.selectedDataSource? element2.operasyonSuresi:0,
              dataKey: element1.stokId + ' ' + element3.ad,
            }
            this.dataSource.push(test);
    
          });
        });
      }
      else{
        this.operasyonList.forEach(element3 => {
      
          let test = {
            bilesenAdi: element1.ad,
            stokId: element1.stokId,
            operasyonId: element3.id,
            operasyonAdi: element3.ad,
            operasyonKodu: element3.kod,
            tezgahAdi: element3.tezgahAdi,
            tezgahGucu: element3.tezgahGucu,
            // operasyonSuresi:this.selectedDataSource? element2.operasyonSuresi:0,
            dataKey: element1.stokId + ' ' + element3.ad,
          }
          this.dataSource.push(test);
  
        });
      }
      

    });


    this.selectedDataSource = [];
    this.data.forEach(item1 => {
      item1.shm = "Stok";

      if (item1.bilesenRotalar.length > 0) {
        item1.bilesenRotalar.forEach(item2 => {
          let params = {
            bilesenAdi: item1.ad,
            stokId: item1.stokId,
            operasyonId: item2.operasyonId,
            operasyonAdi: item2.operasyonAdi,
            operasyonKodu: item2.operasyonKodu,
            operasyonSuresi: item2.operasyonSuresi,
            dataKey: item1.stokId + ' ' + item2.operasyonAdi,
          }
          this.selectedDataSource.push(params);

        });
      }
    });


  }


  private addDuplicatedRotalar(dataSource: any[], selectedDataSource: any[]): any[] {

    
    let changeDataSource: any[] = []; 
    for (let data of dataSource) {
      let durum: boolean = false;
      for (let selected of selectedDataSource) {
        if (data.dataKey === selected.dataKey) {
          durum = true;
          break;
        }
      }
      if (durum) {
        changeDataSource.push(data)
      };
    }
    return changeDataSource;
  }

  onSubmit() {
    this._selectedDataItem = this.addDuplicatedRotalar(this.dataSource, this.selectedDataSource);
    this._selectedDataItem.forEach(element => {
      element.maliyet=element.operasyonSuresi * element.tezgahGucu
    });

  this.dialogRef.close({ data: this._selectedDataItem })
  }

 


  onRowSelect(event) {
    let test = event.data;
    this.data.filter(c => c.stokId == test.stokId)[0].bilesenRotalar.push(test);
  }


  onRowUnselect(event) {

    let test = event.data;
    var bilesenRotalar = this.data.filter(c => c.stokId == test.stokId)[0].bilesenRotalar

    for (let index = 0; index < bilesenRotalar.length; index++) {
      const element = bilesenRotalar[index];
      if (element.operasyonId == test.operasyonId) {
        bilesenRotalar.splice(index, 1);
      }
    }
  }
}
