
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
  selectedReceteItem: any;
  selectedCategory: any = "1";
  toggleVisible: any;
  treeViewChildList: any;
  treeItemSelect: any;
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
    this.GetList()
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



  }
  async GetList() {
    const getList = await this.StokService.GetList()
    this.dataSource = getList.data.items;
    this.totalRecords = getList.count;
  }

  addDialog() {
    this.StokCardDialogService.addDialog(() => {
      this.TreeViewList();
      this.GetList();
    })
  }

  updateDialog() {
    this.StokCardDialogService.updateDialog(() => {
      this.TreeViewList();
      this.GetList();
    })
  }














  TreeItem(item: any) {

    this.treeViewChildList = this.StokTreeViewService.treeViewChildList(item)
  }

  TreeItemSelect(item) {

    this.treeItemSelect = item

  }


  selectNode(node: any) {
    this.selectedNode = node;
  }










  cardAdd(event) {
    this.StokCardDialogService.addDialog(() => {

      this.TreeViewList()
    })

  }
  childCardAdd(event) {
    if (this.treeItemSelect != undefined) {
      this.StokCardDialogService.addChildDialog(this.treeItemSelect, () => {

        this.TreeViewList()
      })
    }


  }
  StokItem: any;
  onRowSelect(event: any) {
    this.StokItem = event.data;

  }
  onRowUnSelect() {
    this.StokItem = null
  }





}

