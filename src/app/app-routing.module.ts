import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { StokComponent } from './pages/stok/stok.component';
import { MaliyetComponent } from './pages/maliyet/maliyet.component';
import { CardStokComponent } from './pages/stok/card-stok/card-stok.component';
import { CardDepoComponent } from './pages/depo/card-depo/card-depo.component';
import { CardHizmetComponent } from './pages/hizmet/card-hizmet/card-hizmet.component';
import { ListStokComponent } from './pages/stok/list-stok/list-stok.component';
import { ListDepoComponent } from './pages/depo/list-depo/list-depo.component';
import { ListHizmetComponent } from './pages/hizmet/list-hizmet/list-hizmet.component';
import { ListMasrafComponent } from './pages/masraf/list-masraf/list-masraf.component';
import { CardMasrafComponent } from './pages/masraf/card-masraf/card-masraf.component';
import { SatinalmaComponent } from './pages/satinalma/satinalma.component';
import { FaturaComponent } from './pages/fatura/fatura.component';
import { AlisFaturaComponent } from './pages/fatura/create-fatura/alis-fatura/alis-fatura.component';
import { SatisFaturaComponent } from './pages/fatura/create-fatura/satis-fatura/satis-fatura.component';

import { ListTalepComponent } from './pages/talep/list-talep/list-talep.component';
import { CreateTalepComponent } from './pages/talep/create-talep/create-talep.component';
import { AlinanTeklifComponent } from './pages/teklif/create-teklif/alinan-teklif/alinan-teklif.component';
import { ListBirimComponent } from './pages/birim/list-birim/list-birim.component';
import { CardReceteComponent } from './pages/maliyet/recete/card-recete/card-recete.component';

const routes: Routes = [
  { path: '', redirectTo: 'stok', pathMatch: 'full', },
  {
    path: '', component: AppLayoutComponent, children: [
      {
        path: "stok", component: StokComponent, children: [
          { path: "stok-kart", component: CardStokComponent },
          { path: "depo-kart", component: CardDepoComponent },
          { path: "hizmet-kart", component: CardHizmetComponent },
          { path: "masraf-kart", component: CardMasrafComponent },
          { path: "stok-list", component: ListStokComponent },
          { path: "depo-list", component: ListDepoComponent },
          { path: "hizmet-list", component: ListHizmetComponent },
          { path: "masraf-list", component: ListMasrafComponent },
          { path: "birim", component: ListBirimComponent },
        ]
      },
      {
        path: "maliyet", component: MaliyetComponent, children: [

          { path: "recete-kart", component: CardReceteComponent },
        ]
      },
      {
        path: "satinalma", component: SatinalmaComponent, children: [

          {
            path: "fatura", component: FaturaComponent, children: [
              { path: "alis-faturasi", component: AlisFaturaComponent },
              { path: "satis-faturasi", component: SatisFaturaComponent },
            ]
          },
          { path: "talep", component: CreateTalepComponent },
          { path: "list-talep", component: ListTalepComponent },
          { path: "alinan-teklif", component: AlinanTeklifComponent },
        ]
      },


    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
