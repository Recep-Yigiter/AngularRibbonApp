
export class UrunAgaciCreateModel {
  kod?: any;
  ad?: any;
  stokId?: any;
  depoId?: any;
  miktar?: any;
  parentId?: any;
  aciklama?: any;
  urunAgaciHareketler?:UrunAgaciHareketCreateModel[]
}


export class UrunAgaciHareketCreateModel{
  stokId?: any;
  depoId?: any;
  miktar?: any;
  tip?: any;
  fiyatListesiId?: any;
  birimFiyat?: any;
  oranMiktar?: any;
  fire?: any;
  aciklama?: any;
  
}
