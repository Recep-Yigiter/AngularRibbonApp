export class CreateTalepModel {
    talepNo?: any;
    departman?: any;
    talepNedeni?: any;
    aciklama?: any;
    TalepHareketler?: CreateTalepHareketModel[]

}

export class CreateTalepHareketModel {
    stokKodu?: any;
    stokAdi?: any;
    stokId?: any;
    talepMiktari?: any;
    talepBirimi?: any;
    aciklama?: any;
}