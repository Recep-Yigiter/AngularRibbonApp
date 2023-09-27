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
import { MaliyetTabComponent } from './app-layout/maliyet-tab/maliyet-tab.component';
import { MaliyetComponent } from './pages/maliyet/maliyet.component';
import { ReceteCardAddComponent } from './shared/dialogs/maliyet/recete-card-add/recete-card-add.component';
import { ReceteCardUpdateComponent } from './shared/dialogs/maliyet/recete-card-update/recete-card-update.component';
import { StokSelectInput } from './shared/components/select-input/stok-select-input/stok-select-input';
import { StokCardSelectComponent } from './shared/dialogs/stok/stok-card-select/stok-card-select.component';
import { StokTuruDropDown } from './shared/components/dropdown/stok-turu-dropdown/stok-turu-dropdown';
import { ReceteChildCardAddComponent } from './shared/dialogs/maliyet/recete-child-card-add/recete-child-card-add.component';
import { LayoutContent } from './shared/components/layout-content/layout-content';
import { StokListComponent } from './pages/stok/lists/stok-list/stok-list.component';
import { HizmetListComponent } from './pages/stok/lists/hizmet-list/hizmet-list.component';
import { MasrafListComponent } from './pages/stok/lists/masraf-list/masraf-list.component';
import { DepoListComponent } from './pages/stok/lists/depo-list/depo-list.component';
import { LayoutListContent } from './shared/components/layout-list-content/layout-list-content';
import { ReceteCardComponent } from './pages/maliyet/cards/recete-card/recete-card.component';
import { ProcessCardComponent } from './pages/maliyet/cards/process-card/process-card.component';
import { BirimComponent } from './pages/stok/tanimlar/birim/birim.component';
import { KategoriComponent } from './pages/stok/tanimlar/kategori/kategori.component';
import { BirimAddDialogComponent } from './shared/dialogs/birim/birim-add-dialog/birim-add-dialog.component';
import { BirimUpdateDialogComponent } from './shared/dialogs/birim/birim-update-dialog/birim-update-dialog.component';
import { BirimSelectDialogComponent } from './shared/dialogs/birim/birim-select-dialog/birim-select-dialog.component';
import { BirimSelectInput } from './shared/components/select-input/birim-select-input/birim-select-input';
import { StokCardChildAddComponent } from './shared/dialogs/stok/stok-card-child-add/stok-card-child-add.component';
import { IscilikComponent } from './pages/maliyet/iscilik/iscilik.component';
import { SatinalmaTabComponent } from './app-layout/satinalma-tab/satinalma-tab.component';

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
    MaliyetTabComponent,
    MaliyetComponent,
    ReceteCardAddComponent,
    ReceteCardUpdateComponent,
    LayoutContent,
    LayoutListContent,

    StokSelectInput,
      StokCardSelectComponent,
      BirimSelectInput,
      StokTuruDropDown,
      ReceteChildCardAddComponent,
      StokListComponent,
      HizmetListComponent,
      MasrafListComponent,
      DepoListComponent,
      ReceteCardComponent,
      ProcessCardComponent,
      BirimComponent,
      KategoriComponent,
      BirimAddDialogComponent,
      BirimUpdateDialogComponent,
      BirimSelectDialogComponent,
      StokCardChildAddComponent,
      IscilikComponent,
      SatinalmaTabComponent,
    
    
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
  providers: [ { provide: "baseUrl", useValue: "https://localhost:7146/api", multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
