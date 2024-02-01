
export class UrunAgaciCreateModel {
  kod?: any;
  ad?: any;
  stokId?: any;
  miktar?: any;
  urunGrubu: any;
  parentId?: any;
  aciklama?: any;
  birimFiyat?: any;
  durum?: any;
  tip?: any;
  operasyonMaliyeti?:any;
  urunAgaciBilesenler?: UrunAgaciHareketCreateModel[];

}


export class UrunAgaciHareketCreateModel {
  stokId?: any;
  miktar?: any;
  tip?: any;
  fiyatListesiId?: any;
  birimFiyat?: any;
  oranMiktar?: any;
  fire?: any;
  aciklama?: any;
  BilesenRotalar?:BilesenRotaCreateModel[];
}

export class BilesenRotaCreateModel {
  OperasyonId?: any;
  OperasyonSuresi?: any;
  BilesenId?:any;
}
