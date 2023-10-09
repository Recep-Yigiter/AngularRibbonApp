import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from 'src/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';


import { StokComponent } from './pages/stok/stok.component';
import { CommonInput } from './shared/components/input/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableContent } from './shared/components/table-content/table-content';
import { FormContent } from './shared/components/form-content/form-content';
import { DialogAction } from './shared/components/dialog-action/dialog-action';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { StokTabComponent } from './app-layout/stok-tab/stok-tab.component';
import { TabsComponent } from './app-layout/tabs/tabs.component';
import { TabComponent } from './app-layout/tab/tab.component';
import { MaliyetTabComponent } from './app-layout/maliyet-tab/maliyet-tab.component';
import { MaliyetComponent } from './pages/maliyet/maliyet.component';
import { ReceteCardAddComponent } from './shared/dialogs/maliyet/recete-card-add/recete-card-add.component';
import { ReceteCardUpdateComponent } from './shared/dialogs/maliyet/recete-card-update/recete-card-update.component';
import { StokSelectInput } from './shared/components/select-input/stok-select-input/stok-select-input';
import { StokTuruDropDown } from './shared/components/dropdown/stok-turu-dropdown/stok-turu-dropdown';
import { ReceteChildCardAddComponent } from './shared/dialogs/maliyet/recete-child-card-add/recete-child-card-add.component';
import { LayoutContent } from './shared/components/layout-content/layout-content';
import { LayoutListContent } from './shared/components/layout-list-content/layout-list-content';
import { ReceteCardComponent } from './pages/maliyet/cards/recete-card/recete-card.component';
import { ProcessCardComponent } from './pages/maliyet/cards/process-card/process-card.component';
import { BirimSelectInput } from './shared/components/select-input/birim-select-input/birim-select-input';
import { IscilikComponent } from './pages/maliyet/iscilik/iscilik.component';
import { SatinalmaTabComponent } from './app-layout/satinalma-tab/satinalma-tab.component';
import { DialogAddStokComponent } from './pages/stok/dialog-add-stok/dialog-add-stok.component';
import { DialogUpdateStokComponent } from './pages/stok/dialog-update-stok/dialog-update-stok.component';
import { DialogSelectStokComponent } from './pages/stok/dialog-select-stok/dialog-select-stok.component';
import { DepoComponent } from './pages/depo/depo.component';
import { HizmetComponent } from './pages/hizmet/hizmet.component';
import { MasrafComponent } from './pages/masraf/masraf.component';
import { DialogAddDepoComponent } from './pages/depo/dialog-add-depo/dialog-add-depo.component';
import { DialogUpdateDepoComponent } from './pages/depo/dialog-update-depo/dialog-update-depo.component';
import { DialogSelectDepoComponent } from './pages/depo/dialog-select-depo/dialog-select-depo.component';
import { DialogSelectHizmetComponent } from './pages/hizmet/dialog-select-hizmet/dialog-select-hizmet.component';
import { DialogAddHizmetComponent } from './pages/hizmet/dialog-add-hizmet/dialog-add-hizmet.component';
import { DialogUpdateHizmetComponent } from './pages/hizmet/dialog-update-hizmet/dialog-update-hizmet.component';
import { DialogUpdateMasrafComponent } from './pages/masraf/dialog-update-masraf/dialog-update-masraf.component';
import { DialogAddMasrafComponent } from './pages/masraf/dialog-add-masraf/dialog-add-masraf.component';
import { DialogSelectMasrafComponent } from './pages/masraf/dialog-select-masraf/dialog-select-masraf.component';
import { CardDepoComponent } from './pages/depo/card-depo/card-depo.component';
import { CardHizmetComponent } from './pages/hizmet/card-hizmet/card-hizmet.component';
import { CardStokComponent } from './pages/stok/card-stok/card-stok.component';
import { ListStokComponent } from './pages/stok/list-stok/list-stok.component';
import { DialogAddBirimComponent } from './pages/birim/dialog-add-birim/dialog-add-birim.component';
import { DialogUpdateBirimComponent } from './pages/birim/dialog-update-birim/dialog-update-birim.component';
import { DialogSelectBirimComponent } from './pages/birim/dialog-select-birim/dialog-select-birim.component';
import { CardBirimComponent } from './pages/birim/card-birim/card-birim.component';
import { ListBirimComponent } from './pages/birim/list-birim/list-birim.component';
import { ListDepoComponent } from './pages/depo/list-depo/list-depo.component';
import { ListHizmetComponent } from './pages/hizmet/list-hizmet/list-hizmet.component';
import { ListMasrafComponent } from './pages/masraf/list-masraf/list-masraf.component';
import { DialogAddChildStokComponent } from './pages/stok/dialog-add-child-stok/dialog-add-child-stok.component';
import { DialogAddIscilikComponent } from './pages/iscilik/dialog-add-iscilik/dialog-add-iscilik.component';
import { DialogUpdateIscilikComponent } from './pages/iscilik/dialog-update-iscilik/dialog-update-iscilik.component';
import { ElektrikComponent } from './pages/elektrik/elektrik.component';
import { DialogAddElektrikComponent } from './pages/elektrik/dialog-add-elektrik/dialog-add-elektrik.component';
import { DialogUpdateElektrikComponent } from './pages/elektrik/dialog-update-elektrik/dialog-update-elektrik.component';
import { FaturaComponent } from './pages/fatura/fatura.component';
import { AlisFaturaComponent } from './pages/fatura/alis-fatura/alis-fatura.component';
import { SatisFaturaComponent } from './pages/fatura/satis-fatura/satis-fatura.component';
import { SatinalmaComponent } from './pages/satinalma/satinalma.component';
import { FaturaLayoutContent } from './shared/components/fatura-layout-content/fatura-layout-content';
import { CalendarInput } from './shared/components/calerdar-input/calendar-input';
import { IrsaliyeTuru } from './shared/components/dropdown/irsaliye-turu/irsaliye-turu';
import { IrsaliyeSeri } from './shared/components/dropdown/irsaliye-seri/irsaliye-seri';
import { IrsaliyeSelectInput } from './shared/components/select-input/irsaliye-select-input/irsaliye-select-input';
import { Kdv } from './shared/components/dropdown/kdv/kdv';
import { Otv } from './shared/components/dropdown/otv/otv';
import { CariComponent } from './pages/cari/cari.component';
import { CardCariComponent } from './pages/cari/card-cari/card-cari.component';
import { ListCariComponent } from './pages/cari/list-cari/list-cari.component';
import { DialogAddCariComponent } from './pages/cari/dialog-add-cari/dialog-add-cari.component';
import { DialogUpdateCariComponent } from './pages/cari/dialog-update-cari/dialog-update-cari.component';
import { DialogSelectCariComponent } from './pages/cari/dialog-select-cari/dialog-select-cari.component';
import { CariSelectInput } from './shared/components/select-input/cari-select-input/cari-select-input';

@NgModule({
  declarations: [
    AppComponent,
    StokComponent,
    CommonInput,
    TableContent,
    FormContent,
    DialogAction,
    AppLayoutComponent,
    StokTabComponent,

    TabsComponent,
    TabComponent,
    MaliyetTabComponent,
    MaliyetComponent,
    ReceteCardAddComponent,
    ReceteCardUpdateComponent,
    LayoutContent,
    LayoutListContent,
    StokSelectInput,
    CalendarInput,
    BirimSelectInput,
    StokTuruDropDown,
    ReceteChildCardAddComponent,
    ReceteCardComponent,
    ProcessCardComponent,
    FaturaLayoutContent,
    IscilikComponent,
    SatinalmaTabComponent,
    DialogAddStokComponent,
    DialogUpdateStokComponent,
    DialogSelectStokComponent,
    DepoComponent,
    HizmetComponent,
    MasrafComponent,
    DialogAddDepoComponent,
    DialogUpdateDepoComponent,
    DialogSelectDepoComponent,
    DialogSelectHizmetComponent,
    DialogAddHizmetComponent,
    DialogUpdateHizmetComponent,
    DialogUpdateMasrafComponent,
    DialogAddMasrafComponent,
    DialogSelectMasrafComponent,
    CardDepoComponent,
    CardHizmetComponent,
    CardStokComponent,
    ListStokComponent,
    DialogAddBirimComponent,
    DialogUpdateBirimComponent,
    DialogSelectBirimComponent,
    CardBirimComponent,
    ListBirimComponent,
    ListDepoComponent,
    ListHizmetComponent,
    ListMasrafComponent,
    DialogAddChildStokComponent,
    DialogAddIscilikComponent,
    DialogUpdateIscilikComponent,
    ElektrikComponent,
    DialogAddElektrikComponent,
    DialogUpdateElektrikComponent,
    FaturaComponent,
    AlisFaturaComponent,
    SatisFaturaComponent,
    SatinalmaComponent,
    IrsaliyeTuru,
    IrsaliyeSeri,
    IrsaliyeSelectInput,
    Kdv,
    Otv,
    CariComponent,
    CardCariComponent,
    ListCariComponent,
    DialogAddCariComponent,
    DialogUpdateCariComponent,
    DialogSelectCariComponent,
    CariSelectInput


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
  providers: [{ provide: "baseUrl", useValue: "https://localhost:7146/api", multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
