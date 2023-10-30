
export class TeklifCreateModel {
    teklifNo?: any;
    duzenleyen?: any;
    cariId?: any;
    aciklama?: any;
    teklifHareketler?: TeklifHareketCreateModel[];
  }
  
  
  export class TeklifHareketCreateModel {
    birimFiyat?: any;
    miktar?: any;
    stokId?: any;
    aciklama?: any;
  
  }
  