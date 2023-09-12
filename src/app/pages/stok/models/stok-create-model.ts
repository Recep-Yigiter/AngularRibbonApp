import { StokTuru } from "src/app/shared/enums/stok-turu";

export class StokCreateModel{
    id:string;
    kod: string;
    ad: string;
    birimFiyat:any;
    stokGrupId:string;
    birimId: string;
    aciklama: string;
    durum: boolean;
  
  }