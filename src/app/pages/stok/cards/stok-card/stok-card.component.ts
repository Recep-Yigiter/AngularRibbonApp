
import { Component, OnInit, ViewChild } from '@angular/core';
import { StokCardDialogService } from 'src/app/shared/dialogs/stok/services/stok-card-dialog.service';
import { MatRadioButton } from '@angular/material/radio';
import { StokService } from 'src/app/core/services/stok/stok.service';
import { StokTreeViewService } from 'src/app/core/services/stok/stok-treeview.service';



export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

export interface TreeViewItemModel {
  id: any;
  name: string;
  parentId: string;
  stokId: string;
  stokAdi: string;
  subFolders: TreeViewItemModel[];
}
@Component({
  selector: 'app-stok-card',
  templateUrl: './stok-card.component.html',
  styleUrls: ['./stok-card.component.scss'],

})
export class StokCardComponent implements OnInit {
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

  stokDetayList: any = [
    // { label: "Stok Kodu", value: this.selectedNode?.kod },
    // { label: "Stok Kısa Adı ", value: null },
    // { label: "Stok Adı", value: this.selectedNode?.ad },
    // { label: "Stok Türü", value: null },
    // { label: "Sipariş İhtiyaç Seviyesi", value: null },
    // { label: "Birim1 Adı ", value: this.selectedNode?.birimAdi },
    // { label: "Birim2 Adı ", value: null },
    // { label: "Birim3 Adı ", value: null },
    // { label: "Katsayı ", value: null },
    // { label: "Alış KDV Oranı ", value: null },
    // { label: "Satış KDV Oranı ", value: null },
    // { label: "Alış Vade Süresi", value: null },
    // { label: "Satış Vade Süresi", value: null },
    // { label: "Satır İskonto", value: "Uygulanır" },
  ]
  @ViewChild('first') matRadioButton: MatRadioButton;
  constructor(
    private StokService: StokService,
    private StokCardDialogService: StokCardDialogService,
    private StokTreeViewService: StokTreeViewService
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

   this.selectedNode=this.menu[0];

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
  addDialog() {
    this.StokCardDialogService.addDialog(() => {
      this.TreeViewList();
    })
  }
  addChildDialog(){
    if (this.selectedNode != undefined) {
      this.StokCardDialogService.addChildDialog(this.selectedNode, () => {

        this.TreeViewList()
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

