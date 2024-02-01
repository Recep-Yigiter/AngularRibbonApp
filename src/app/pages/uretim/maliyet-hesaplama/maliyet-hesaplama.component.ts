import { Component, OnInit } from '@angular/core';
import { UrunAgaciService } from '../urun-agaci/services/urun-agaci.service';

@Component({
  selector: 'app-maliyet-hesaplama',
  templateUrl: './maliyet-hesaplama.component.html',
  styleUrls: ['./maliyet-hesaplama.component.scss']
})
export class MaliyetHesaplamaComponent implements OnInit {

  constructor(private UrunAgaciService: UrunAgaciService) { }
  ngOnInit(): void {
    this.getList()
  }

  dataSource: any;
  selectedItem: any;
  StokItem: any;
  totalHesap: any;
  totalStok: any;


  testList: any[];
  async getList() {
    this.dataSource = (await this.UrunAgaciService.GetList()).data.items

    this.dataSource.forEach(element => {
      if (element.urunAgaciBilesenler.length > 0) {
        element.stokTipi = "YarıMamul"
      }else{
        element.stokTipi = "Hammadde"
      }
    });


    console.log(this.dataSource);




  }


  onRowSelect(event: any) {
    this.StokItem = event.data;

  }
  onRowUnSelect() {
    this.StokItem = null
  }


  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
}
