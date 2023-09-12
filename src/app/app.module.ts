import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from 'src/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { DepoComponent } from './pages/depo/depo.component';

import { StokComponent } from './pages/stok/stok.component';
import { StokCardComponent } from './pages/stok/cards/stok-card/stok-card.component';
import { HizmetCardComponent } from './pages/stok/cards/hizmet-card/hizmet-card.component';
import { DepoCardComponent } from './pages/stok/cards/depo-card/depo-card.component';
import { MasrafCardComponent } from './pages/stok/cards/masraf-card/masraf-card.component';
import { CommonInput } from './shared/components/input/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListContent } from './shared/components/list/common-list/list-content';
import { TableContent } from './shared/components/table-content/table-content';
import { FormContent } from './shared/components/form-content/form-content';
import { DialogAction } from './shared/components/dialog-action/dialog-action';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { StokTabComponent } from './app-layout/stok-tab/stok-tab.component';
import { StokCardAddComponent } from './shared/dialogs/stok/stok-card-add/stok-card-add.component';
import { StokCardUpdateComponent } from './shared/dialogs/stok/stok-card-update/stok-card-update.component';
import { TabsComponent } from './app-layout/tabs/tabs.component';
import { TabComponent } from './app-layout/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,

    StokComponent,
    DepoComponent,
    StokCardComponent,
    HizmetCardComponent,
    DepoCardComponent,
    MasrafCardComponent,
    CommonInput,
    ListContent,
    TableContent,
    FormContent,
    DialogAction,
    AppLayoutComponent,
    StokTabComponent,
    StokCardAddComponent,
    StokCardUpdateComponent,
    TabsComponent,
    TabComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    HttpClientModule,
    PrimeNgModule,
    MaterialModule,
   
  ],
  providers: [ { provide: "baseUrl", useValue: "https://localhost:7064/api", multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
