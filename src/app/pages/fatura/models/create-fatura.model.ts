export class CreateFaturaModel {
    faturaTuru?: any;
    seri?: any;
    belgeNo?: any;
    referans?: any;
    kdv?: any;
    otv?: any;
    eFatura?: any;
    eArsiv?: any;
    aciklama?: any;
    cariId?: any;
    faturaHareketler?: CreateFaturaHareketModel[];
}

export class CreateFaturaHareketModel{
    faturaHareketTuru?:any;
    id?:any;
    birimFiyat?:number;
    giren?:number;
    cikan?:number;
    stokId?:any;
    depoId?:any;
}


