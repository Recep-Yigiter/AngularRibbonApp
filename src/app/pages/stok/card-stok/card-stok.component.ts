import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatRadioButton } from '@angular/material/radio';

import { StokCardDialogService } from 'src/app/shared/dialogs/stok/services/stok-card-dialog.service';
import { StokTreeViewService } from '../services/stok-treeview.service';
import { StokService } from '../services/stok.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddStokComponent } from '../dialog-add-stok/dialog-add-stok.component';
import { DialogAddChildStokComponent } from '../dialog-add-child-stok/dialog-add-child-stok.component';
@Component({
  selector: 'app-card-stok',
  templateUrl: './card-stok.component.html',
  styleUrls: ['./card-stok.component.scss']
})
export class CardStokComponent implements OnInit {
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
    private StokCardDialogService: StokCardDialogService,
    private StokTreeViewService: StokTreeViewService,
    private customDialogService: CustomDialogService
  ) {
    this.toggleVisible = this.StokTreeViewService.toggleVisible
  }

  ngOnInit(): void {
    this.TreeViewList()
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
  addDialog() {
    // this.StokCardDialogService.addDialog(this.selectedNode, () => {
    //   this.TreeViewList();
    // })

    if (this.selectedNode == null) {
      this.customDialogService.smallDialog({
        componentType: DialogAddStokComponent
      })

    } else {
      this.customDialogService.smallDialog({
        componentType: DialogAddChildStokComponent
      })
    }



  }

  updateDialog() {
    this.StokCardDialogService.updateDialog(() => {
      this.TreeViewList();
    })
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

