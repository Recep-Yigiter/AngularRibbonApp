import { NgModule } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { PickListModule } from 'primeng/picklist';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessageModule } from 'primeng/message';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ListboxModule } from 'primeng/listbox';
import { MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ImageModule } from 'primeng/image';
import { OrderListModule } from 'primeng/orderlist';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { SortIcon } from 'primeng/table';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { ChipModule } from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import { SpeedDialModule } from 'primeng/speeddial';
import { FieldsetModule } from 'primeng/fieldset';

import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabMenuModule } from 'primeng/tabmenu';

import {ToggleButtonModule} from 'primeng/togglebutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BlockUIModule} from 'primeng/blockui';
import {CarouselModule} from 'primeng/carousel';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import { TimelineModule } from 'primeng/timeline';
import {DragDropModule} from 'primeng/dragdrop';
import {InplaceModule} from 'primeng/inplace';
import {SlideMenuModule} from 'primeng/slidemenu';
import { PaginatorModule } from 'primeng/paginator';
import {InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  exports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    DataViewModule,
    ButtonModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    RatingModule,
    RippleModule,
    TableModule,
    ChipsModule,
    ToggleButtonModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    TabMenuModule,
    ToolbarModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    SpeedDialModule,
    FieldsetModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    MenuModule,
    OverlayPanelModule,
    DynamicDialogModule,
    AutoCompleteModule,
    PasswordModule,
    DividerModule,
    PickListModule,
    RadioButtonModule,
    MessageModule,
    KeyFilterModule,
    MessagesModule,
    InputNumberModule,
    CascadeSelectModule,
    ListboxModule,
    ChartModule,
    StepsModule,
    CardModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ImageModule,
    OrderListModule,
    FileUploadModule,
    TabViewModule,
    AccordionModule,
    CheckboxModule,
    BadgeModule,
    TagModule,
    ChipModule,
    BlockUIModule,
    InputMaskModule,
    CarouselModule,
    TimelineModule,
    InplaceModule,
    SlideMenuModule,
    BreadcrumbModule,
    PaginatorModule,
    InputTextareaModule
  ],
  providers: [MessageService, ConfirmationService, SortIcon],
})
export class PrimeNgModule {}
