import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
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
import { StokTabComponent } from './app-layout/components/stok-tab/stok-tab.component';
import { TabsComponent } from './app-layout/tabs/tabs.component';
import { TabComponent } from './app-layout/tab/tab.component';
import { MaliyetTabComponent } from './app-layout/components/maliyet-tab/maliyet-tab.component';
import { MaliyetComponent } from './pages/maliyet/maliyet.component';
import { ReceteCardAddComponent } from './shared/dialogs/maliyet/recete-card-add/recete-card-add.component';
import { ReceteCardUpdateComponent } from './shared/dialogs/maliyet/recete-card-update/recete-card-update.component';
import { StokSelectInput } from './shared/components/select-input/stok-select-input/stok-select-input';
import { StokTuruDropDown } from './shared/components/dropdown/stok-turu-dropdown/stok-turu-dropdown';
import { ReceteChildCardAddComponent } from './shared/dialogs/maliyet/recete-child-card-add/recete-child-card-add.component';
import { BirimSelectInput } from './shared/components/select-input/birim-select-input/birim-select-input';
import { SatinalmaTabComponent } from './app-layout/components/satinalma-tab/satinalma-tab.component';
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
import { AlisFaturaComponent } from './pages/fatura/create-fatura/alis-fatura/alis-fatura.component';
import { SatisFaturaComponent } from './pages/fatura/create-fatura/satis-fatura/satis-fatura.component';
import { SatinalmaComponent } from './pages/satinalma/satinalma.component';
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
import { DepoSelectInput } from './shared/components/select-input/depo-select-input/depo-select-input';
import { DepoHareketComponent } from './pages/depo-hareket/depo-hareket.component';
import { ListByDepoIdComponent } from './pages/depo-hareket/list-by-depoId/list-by-depoId.component';
import { FaturaHareketComponent } from './pages/fatura-hareket/fatura-hareket.component';
import { TalepDurum } from './shared/components/dropdown/talep-durum/talep-durum';
import { TalepComponent } from './pages/talep/talep.component';
import { TalepHareketComponent } from './pages/talep-hareket/talep-hareket.component';
import { CreateTalepComponent } from './pages/talep/create-talep/create-talep.component';
import { ListTalepComponent } from './pages/talep/list-talep/list-talep.component';
import { ListByTalepIdComponent } from './pages/talep-hareket/list-by-talep-id/list-by-talepId.component';
import { TeklifComponent } from './pages/teklif/teklif.component';
import { TeklifHareketComponent } from './pages/teklif-hareket/teklif-hareket.component';
import { AlinanTeklifComponent } from './pages/teklif/create-teklif/alinan-teklif/alinan-teklif.component';
import { VerilenTeklifComponent } from './pages/teklif/create-teklif/verilen-teklif/verilen-teklif.component';
import { DialogAddAlinanTeklifComponent } from './pages/teklif/create-teklif/alinan-teklif/dialog-add-alinan-teklif/dialog-add-alinan-teklif.component';
import { SmallDialogContentComponent } from './shared/components/layouts/small-dialog-content/small-dialog-content.component';
import { NormalDialogContentComponent } from './shared/components/layouts/normal-dialog-content/normal-dialog-content.component';
import { LargeDialogContentComponent } from './shared/components/layouts/large-dialog-content/large-dialog-content.component';
import { ContentLayoutComponent } from './shared/components/layouts/content-layout/content-layout.component';
import { LayoutContent } from './shared/components/layouts/layout-content/layout-content/layout-content';
import { DialogComponent } from './shared/dialog/dialog.component';
import { DialogFooterDirective } from './core/directives/dialog-footer.directive';
import { DialogHeaderDirective } from './core/directives/dialog-header.directive';
import { DialogContentDirective } from './core/directives/dialog-content.directive';
import { ErrorDialogComponent } from './shared/dialogs/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import { DeleteDialogComponent } from './shared/dialogs/delete-dialog/delete-dialog.component';
import { DialogUpdateChildStokComponent } from './pages/stok/dialog-update-child-stok/dialog-update-child-stok.component';
import { CardLayoutComponent } from './shared/components/layouts/card-layout/card-layout.component';
import { CardMasrafComponent } from './pages/masraf/card-masraf/card-masraf.component';
import { ReceteComponent } from './pages/maliyet/recete/recete.component';
import { CardReceteComponent } from './pages/maliyet/recete/card-recete/card-recete.component';

import { DialogUpdateReceteComponent } from './pages/maliyet/recete/dialog-update-recete/dialog-update-recete.component';
import { DialogUpdateChildReceteComponent } from './pages/maliyet/recete/dialog-update-child-recete/dialog-update-child-recete.component';
import { DialogAddReceteComponent } from './pages/maliyet/recete/dialog-add-recete/dialog-add-recete.component';
import { DialogAddChildReceteComponent } from './pages/maliyet/recete/dialog-add-child-recete/dialog-add-child-recete.component';
import { SatisTabComponent } from './app-layout/components/satis-tab/satis-tab.component';
import { UretimTabComponent } from './app-layout/components/uretim-tab/uretim-tab.component';
import { UretimComponent } from './pages/uretim/uretim.component';
import { CardUrunAgaciComponent } from './pages/uretim/urun-agaci/card-urun-agaci/card-urun-agaci.component';
import { UrunAgaciComponent } from './pages/uretim/urun-agaci/urun-agaci.component';
import { DialogAddChildUrunAgaciComponent } from './pages/uretim/urun-agaci/dialog-add-child-urun-agaci/dialog-add-child-urun-agaci.component';
import { DialogAddUrunAgaciComponent } from './pages/uretim/urun-agaci/dialog-add-urun-agaci/dialog-add-urun-agaci.component';
import { DialogUpdateUrunAgaciComponent } from './pages/uretim/urun-agaci/dialog-update-urun-agaci/dialog-update-urun-agaci.component';
import { ListUrunAgaciComponent } from './pages/uretim/urun-agaci/list-urun-agaci/list-urun-agaci.component';
import { DepoInlineSelectInput } from './shared/components/inline-select-input/depo-inline-select-input/depo-inline-select-input';
import { StokInlineSelectInput } from './shared/components/inline-select-input/stok-inline-select-input/stok-inline-select-input';
import { MaliyetHesaplamaComponent } from './pages/uretim/maliyet-hesaplama/maliyet-hesaplama.component';
import { RotaPlaniComponent } from './pages/uretim/rota-plani/rota-plani.component';
import { DialogAddRotaComponent } from './pages/uretim/rota-plani/dialog-add-rota/dialog-add-rota.component';
import { OperasyonComponent } from './pages/uretim/operasyon/operasyon.component';
import { DialogAddOperasyonComponent } from './pages/uretim/operasyon/dialog-add-operasyon/dialog-add-operasyon.component';
import { DialogUpdateOperasyonComponent } from './pages/uretim/operasyon/dialog-update-operasyon/dialog-update-operasyon.component';
import { ListOperasyonComponent } from './pages/uretim/operasyon/list-operasyon/list-operasyon.component';
import { DialogAddTezgahComponent } from './pages/uretim/tezgah/dialog-add-tezgah/dialog-add-tezgah.component';
import { DialogUpdateTezgahComponent } from './pages/uretim/tezgah/dialog-update-tezgah/dialog-update-tezgah.component';
import { DialogSelectTezgahComponent } from './pages/uretim/tezgah/dialog-select-tezgah/dialog-select-tezgah.component';
import { TezgahSelectInput } from './shared/components/select-input/tezgah-select-input/tezgah-select-input';
import { ListTezgahComponent } from './pages/uretim/tezgah/list-tezgah/list-tezgah.component';
import { TestComponent } from './pages/test/test.component';

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
    StokSelectInput,
    CalendarInput,
    BirimSelectInput,
    StokTuruDropDown,
    ReceteChildCardAddComponent,
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
    CariSelectInput,
    DepoSelectInput,
    DepoHareketComponent,
    ListByDepoIdComponent,
    FaturaHareketComponent,
    TalepDurum,
    LayoutContent,
    TalepComponent,
    TalepHareketComponent,
    CreateTalepComponent,
    ListTalepComponent,
    ListByTalepIdComponent,
    DepoInlineSelectInput,
    TeklifComponent,
    TeklifHareketComponent,
    AlinanTeklifComponent,
    VerilenTeklifComponent,
    DialogAddAlinanTeklifComponent,
    SmallDialogContentComponent,
    NormalDialogContentComponent,
    LargeDialogContentComponent,
    ContentLayoutComponent,
    DialogComponent,
    DialogFooterDirective,
    DialogHeaderDirective,
    DialogContentDirective,
    ErrorDialogComponent,
    ConfirmDialogComponent,
    DeleteDialogComponent,
    DialogUpdateChildStokComponent,
    CardLayoutComponent,
    CardMasrafComponent,
    ReceteComponent,
    CardReceteComponent,
    DialogAddChildReceteComponent,
    DialogAddReceteComponent,
    DialogUpdateReceteComponent,
    DialogUpdateChildReceteComponent,
    SatisTabComponent,
    UretimTabComponent,
    UretimComponent,
    UrunAgaciComponent,
    CardUrunAgaciComponent,
    DialogAddChildUrunAgaciComponent,
    DialogAddUrunAgaciComponent,
    DialogUpdateUrunAgaciComponent,
    ListUrunAgaciComponent,
    StokInlineSelectInput,
    MaliyetHesaplamaComponent,
    RotaPlaniComponent,
    DialogAddRotaComponent,
    OperasyonComponent,
    DialogAddOperasyonComponent,
    DialogUpdateOperasyonComponent,
    ListOperasyonComponent,
    DialogAddTezgahComponent,
    DialogUpdateTezgahComponent,
    DialogSelectTezgahComponent,
    TezgahSelectInput,
    ListTezgahComponent,
    TestComponent

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
  // providers: [{ provide: "baseUrl", useValue: "http://192.168.4.31:8080/api", multi: true },{provide:LocationStrategy, useClass:HashLocationStrategy,}],   build yaparken açılacak
  providers: [{ provide: "baseUrl", useValue: "https://localhost:7146/api", multi: true }, { provide: LocationStrategy, useClass: HashLocationStrategy, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
