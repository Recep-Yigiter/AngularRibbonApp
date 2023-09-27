import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepoCardComponent } from './pages/stok/cards/depo-card/depo-card.component';
import { StokCardComponent } from './pages/stok/cards/stok-card/stok-card.component';
import { HizmetCardComponent } from './pages/stok/cards/hizmet-card/hizmet-card.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { StokComponent } from './pages/stok/stok.component';
import { MasrafCardComponent } from './pages/stok/cards/masraf-card/masraf-card.component';
import { MaliyetComponent } from './pages/maliyet/maliyet.component';
import { StokListComponent } from './pages/stok/lists/stok-list/stok-list.component';
import { DepoListComponent } from './pages/stok/lists/depo-list/depo-list.component';
import { HizmetListComponent } from './pages/stok/lists/hizmet-list/hizmet-list.component';
import { MasrafListComponent } from './pages/stok/lists/masraf-list/masraf-list.component';
import { ReceteCardComponent } from './pages/maliyet/cards/recete-card/recete-card.component';
import { BirimComponent } from './pages/stok/tanimlar/birim/birim.component';

const routes: Routes = [
  { path: '', redirectTo: 'stok', pathMatch: 'full', },
  {
    path: '', component: AppLayoutComponent, children: [
      {
        path: "stok", component: StokComponent, children: [
          { path: "stok-kart", component: StokCardComponent },
          { path: "depo-kart", component: DepoCardComponent },
          { path: "hizmet-kart", component: HizmetCardComponent },
          { path: "masraf-kart", component: MasrafCardComponent },
          { path: "stok-list", component: StokListComponent },
          { path: "depo-list", component: DepoListComponent },
          { path: "hizmet-list", component: HizmetListComponent },
          { path: "masraf-list", component: MasrafListComponent },
          { path: "birim", component: BirimComponent },
        ]
      },
      {
        path: "maliyet", component: MaliyetComponent, children: [

          { path: "recete-kart", component: ReceteCardComponent },
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
