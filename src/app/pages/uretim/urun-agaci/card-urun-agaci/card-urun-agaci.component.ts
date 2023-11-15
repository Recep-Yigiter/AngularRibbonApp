import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { UrunAgaciService } from '../services/urun-agaci.service';
import { UrunAgaciTreeViewService } from '../services/urun-agaci-treeview.service';
import { DialogAddChildUrunAgaciComponent } from '../dialog-add-child-urun-agaci/dialog-add-child-urun-agaci.component';
import { DialogAddUrunAgaciComponent } from '../dialog-add-urun-agaci/dialog-add-urun-agaci.component';
import { DialogUpdateUrunAgaciComponent } from '../dialog-update-urun-agaci/dialog-update-urun-agaci.component';

@Component({
  selector: 'app-card-urun-agaci',
  templateUrl: './card-urun-agaci.component.html',
  styleUrls: ['./card-urun-agaci.component.scss']
})
export class CardUrunAgaciComponent implements OnInit {
  deneme = "background:black"
  index = 0;
  menu: any;
  expand = {};
  treeViewDataSource: any;
  dataSource: any;
  totalRecords: number;
  totalHesap: any;
  selectedNode = undefined;
  // tabs: any[] = ["Kabin","Kapı","Buton","Ağırlık Şasesi","Makine Şasesi","Pano","Regülator","Karkas","Kasnak","Makine","Seperator Sacı","Ray","Aşırı Yük","Tampon","Konsol Grubu"]
  tabs: any[] = ["Kabin", "Kapı", "Buton", "Ağırlık Şasesi", "Makine Şasesi", "Pano"]

  selectedCategory: any = "1";
  toggleVisible: any;
  treeViewChildList: any;
  selectedUrunGrubu: any;
  UrunAgaciDetayList: any = []
  @ViewChild('first') matRadioButton: MatRadioButton;
  constructor(
    private UrunAgaciService: UrunAgaciService,
    private UrunAgaciTreeViewService: UrunAgaciTreeViewService,
    private customDialogService: CustomDialogService
  ) {
    this.toggleVisible = this.UrunAgaciTreeViewService.toggleVisible
  }

  ngOnInit(): void {

    this.TreeViewList();
  }
  async TreeViewList() {
    const getList = await this.UrunAgaciService.GetList();
    this.treeViewDataSource = getList;


    const deneme = this.treeViewDataSource.data.items.filter(d => d.urunGrubu == "Kabin")

    deneme.forEach(element => {

      if (element.parentId == "00000000-0000-0000-0000-000000000000" || element.parentId == null) {
        element.parentId = null
      } else {
        element.parentId = element.parentId
      }
    });

    var tree = this.UrunAgaciTreeViewService.CreateTreeView(deneme);


    this.menu = tree.map(x => this.UrunAgaciTreeViewService.toNode(x));

    this.selectedNode = null;

    this.UrunAgaciDetayList = [
      { label: "Ağaç Kodu", value: null },
      { label: "ağaç Adı ", value: null },
      { label: "Tipi", value: null },
      { label: "Durum", value: null },
      { label: "Fason", value: null },
      { label: "Notlar", value: null },
      { label: "Oluşturan", value: null },
      { label: "Oluşturma Tarihi", value: null },
      { label: "Değiştiren", value: null },
      { label: "Değiştirme Tarihi", value: null },

    ]

  }
  addChildDialog() {
    this.customDialogService.largeDialog({
      componentType: DialogAddChildUrunAgaciComponent,
      data: this.selectedNode,
      afterClose: () => { this.TreeViewList() }
    })

  }
  addNewCardDialog() {
    this.customDialogService.largeDialog({
      componentType: DialogAddUrunAgaciComponent,
      data: this.selectedUrunGrubu ? this.selectedUrunGrubu : 'Kabin',
      afterClose: () => { this.TreeViewList() }
    })


  }
  updateDialog() {

    if (this.selectedNode.submenu == undefined) {
      this.customDialogService.largeDialog({
        componentType: DialogUpdateUrunAgaciComponent,
        data: this.selectedNode,
        afterClose: () => { this.TreeViewList() }
      })
    }
    else {
      this.customDialogService.largeDialog({
        componentType: DialogUpdateUrunAgaciComponent,
        data: this.selectedNode,
        afterClose: () => { this.TreeViewList() }
      })
    }


  }
  deleteDialog() {
    console.log(this.selectedNode)
    if (this.selectedNode.submenu == undefined || this.selectedNode == null) {
      this.customDialogService.deleteDialog(() => {


        this.UrunAgaciService.delete(this.selectedNode.id, () => { this.TreeViewList() });
      })
    }


  }
  selectNode(node: any) {

    this.UrunAgaciDetayList = []
    this.selectedNode = node;
    this.UrunAgaciDetayList = [
      { label: "Ağaç Kodu", value: this.selectedNode?.kod },
      { label: "ağaç Adı ", value: this.selectedNode?.ad },
      { label: "Tipi", value: null },
      { label: "Durum", value: null },
      { label: "Fason", value: null },
      { label: "Notlar", value: null },
      { label: "Oluşturan", value: null },
      { label: "Oluşturma Tarihi", value: null },
      { label: "Değiştiren", value: null },
      { label: "Değiştirme Tarihi", value: null },
    ]

  }
  async selectedTabChange(event) {
    this.treeViewDataSource = [];
    const getList = await this.UrunAgaciService.GetList();
    this.treeViewDataSource = getList;
    const deneme = this.treeViewDataSource.data.items.filter(d => d.urunGrubu == event.tab.textLabel);
    this.selectedUrunGrubu = event.tab.textLabel;
    deneme.forEach(element => {
      if (element.parentId == "00000000-0000-0000-0000-000000000000" || element.parentId == null) {
        element.parentId = null
      } else {
        element.parentId = element.parentId
      }
    });

    var tree = this.UrunAgaciTreeViewService.CreateTreeView(deneme);
    this.menu = tree.map(x => this.UrunAgaciTreeViewService.toNode(x));
    this.selectedNode = null;
    this.UrunAgaciDetayList = [
      { label: "UrunAgaci Kodu", value: null },
      { label: "UrunAgaci Kısa Adı ", value: null },
      { label: "UrunAgaci Adı", value: null },
      { label: "UrunAgaci Türü", value: null },
      { label: "Sipariş İhtiyaç Seviyesi", value: null },
      { label: "Birim1 Adı ", value: null },
      { label: "Birim2 Adı ", value: null },
      { label: "Birim3 Adı ", value: null },
      { label: "Katsayı ", value: null },
      { label: "Alış KDV Oranı ", value: null },
      { label: "Satış KDV Oranı ", value: null },
      { label: "Alış Vade Süresi", value: null },
      { label: "Satış Vade Süresi", value: null },
      { label: "Satır İskonto", value: null },
    ]
    
  }


}

