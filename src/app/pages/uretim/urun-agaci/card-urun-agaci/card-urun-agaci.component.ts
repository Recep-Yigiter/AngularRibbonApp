import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddChildStokComponent } from 'src/app/pages/stok/dialog-add-child-stok/dialog-add-child-stok.component';
import { DialogAddStokComponent } from 'src/app/pages/stok/dialog-add-stok/dialog-add-stok.component';
import { DialogUpdateChildStokComponent } from 'src/app/pages/stok/dialog-update-child-stok/dialog-update-child-stok.component';
import { DialogUpdateStokComponent } from 'src/app/pages/stok/dialog-update-stok/dialog-update-stok.component';
import { StokTreeViewService } from 'src/app/pages/stok/services/stok-treeview.service';
import { StokService } from 'src/app/pages/stok/services/stok.service';
import { DialogAddChildUrunAgaciComponent } from '../dialog-add-child-urun-agaci/dialog-add-child-urun-agaci.component';
import { DialogAddUrunAgaciComponent } from '../dialog-add-urun-agaci/dialog-add-urun-agaci.component';


@Component({
  selector: 'app-card-urun-agaci',
  templateUrl: './card-urun-agaci.component.html',
  styleUrls: ['./card-urun-agaci.component.scss']
})
export class CardUrunAgaciComponent implements OnInit {
  deneme="background:black"
  index = 0;
  menu: any;
  expand = {};
  treeViewDataSource: any;
  dataSource: any;
  totalRecords: number;
  totalHesap: any;
  selectedNode = undefined;

  selectedCategory: any = "1";
  toggleVisible: any;
  treeViewChildList: any;

  stokDetayList: any = []
  @ViewChild('first') matRadioButton: MatRadioButton;
  constructor(
    private StokService: StokService,
    private StokTreeViewService: StokTreeViewService,
    private customDialogService: CustomDialogService
  ) {
    this.toggleVisible = this.StokTreeViewService.toggleVisible
  }

  ngOnInit(): void {
    
    this.TreeViewList();
  }
  async TreeViewList() {
    const getList = await this.StokService.GetListTreeView()

    this.treeViewDataSource = getList;

    this.treeViewDataSource.data.items.forEach(element => {

      if (element.parentId == "00000000-0000-0000-0000-000000000000" || element.parentId == null) {
        element.parentId = null
      } else {
        element.parentId = element.parentId
      }
    });
    var tree = this.StokTreeViewService.CreateTreeView(this.treeViewDataSource.data.items);
    this.menu = tree.map(x => this.StokTreeViewService.toNode(x));

    this.selectedNode = null;

    this.stokDetayList = [
      { label: "Stok Kodu", value: null },
      { label: "Stok Kısa Adı ", value: null },
      { label: "Stok Adı", value: null },
      { label: "Stok Türü", value: null },
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
  addChildDialog() {


    this.customDialogService.largeDialog({
      componentType: DialogAddChildUrunAgaciComponent,
      data:this.selectedNode,
      afterClose: () => {this.TreeViewList()}
    })



  }
  addNewCardDialog() {
    this.customDialogService.largeDialog({
      componentType: DialogAddUrunAgaciComponent,
      data:this.selectedNode,
      afterClose: () => {this.TreeViewList()}
    })


  }
  updateDialog() {

    if (this.selectedNode.submenu == undefined) {
      this.customDialogService.largeDialog({
        componentType:DialogUpdateChildStokComponent,
        data: this.selectedNode,
        afterClose: () => { this.TreeViewList() }
      })
    }
    else {
      this.customDialogService.smallDialog({
        componentType: DialogUpdateStokComponent ,
        data: this.selectedNode,
        afterClose: () => {  this.TreeViewList() }
      })
    }


  }
  deleteDialog() {
    if (this.selectedNode.submenu == undefined || this.selectedNode.submenu == null) {
      this.customDialogService.deleteDialog(() => {


        this.StokService.delete(this.selectedNode.id, () => { this.TreeViewList() });
      })
    }


  }
  selectNode(node: any) {

    this.stokDetayList = []
    this.selectedNode = node;
    this.stokDetayList = [
      { label: "Stok Kodu", value: this.selectedNode?.kod },
      { label: "Stok Kısa Adı ", value: null },
      { label: "Stok Adı", value: this.selectedNode?.ad },
      { label: "Stok Türü", value: null },
      { label: "Sipariş İhtiyaç Seviyesi", value: null },
      { label: "Birim1 Adı ", value: this.selectedNode?.birimAdi },
      { label: "Birim2 Adı ", value: null },
      { label: "Birim3 Adı ", value: null },
      { label: "Katsayı ", value: null },
      { label: "Alış KDV Oranı ", value: null },
      { label: "Satış KDV Oranı ", value: null },
      { label: "Alış Vade Süresi", value: null },
      { label: "Satış Vade Süresi", value: null },
      { label: "Satır İskonto", value: "Uygulanır" },
    ]

  }



}

