
export class UrunAgaciCreateModel {
  kod?: any;
  ad?: any;
  stokId?: any;
  miktar?: any;
  urunGrubu:any;
  parentId?: any;
  aciklama?: any;
  UrunAgaciBilesenler?:UrunAgaciHareketCreateModel[]
}


export class UrunAgaciHareketCreateModel{
  stokId?: any;
  miktar?: any;
  tip?: any;
  fiyatListesiId?: any;
  birimFiyat?: any;
  oranMiktar?: any;
  fire?: any;
  aciklama?: any;
  
}
