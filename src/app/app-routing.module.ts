import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepoCardComponent } from './pages/stok/cards/depo-card/depo-card.component';
import { StokCardComponent } from './pages/stok/cards/stok-card/stok-card.component';
import { HizmetCardComponent } from './pages/stok/cards/hizmet-card/hizmet-card.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { StokComponent } from './pages/stok/stok.component';
import { MasrafCardComponent } from './pages/stok/cards/masraf-card/masraf-card.component';

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
