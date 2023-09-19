import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { ReceteTreeViewService } from '../../services/recete-tree-view.service';
import { StokCardDialogService } from 'src/app/shared/dialogs/stok/services/stok-card-dialog.service';
import { MatRadioButton } from '@angular/material/radio';
import { StokService } from '../../services/stok.service';

export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

export interface TreeViewItemModel {
  id: any;
  name: string;
  parentId: string;
  stokId: string;
  stokAdi:string;
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
  dataSource: any;
  totalRecords: number;
  totalHesap: any;
  selectedNode = undefined;
  res: any = []
  selectedReceteItem:any;
  selectedCategory:any="1";
  @ViewChild('first') matRadioButton : MatRadioButton;
  constructor(private StokService: StokService, private StokCardDialogService: StokCardDialogService) {
   
  }
  ngOnInit(): void {

    this.GetAllRecete()

  }

  treeItemSelect: any;
  TreeItem(item: any) {

    var deneme = [];


    deneme.push(item)
    const collect = (n, out = []) => {

      for (const { submenu, ...item } of n) {
        out.push(item);
        submenu?.length && collect(submenu, out);
      }
      return out;
    };

    const result = deneme.map(({ submenu, ...item }) => ({ ...item, submenu: collect(submenu) }));

    this.res = result[0].submenu

    this.calculateLastYearTotal()
  }

  TreeItemSelect(item) {
    this.treeItemSelect = item

  }



  private toNode(x: any): any {
    const y: any = { ...x };
    y.index = ++this.index;
    for (let n = 0; n < y.submenu?.length; n++) {
      y.submenu[n] = this.toNode(y.submenu[n])
    }
    return y;
  }

  toggleVisible(node: any) {
    if (node.submenu && node.submenu?.length) {
      if (this.expand[node.index]) {
        this.expand[node.index] = false;
      } else {
        this.expand[node.index] = true;
      }
    }
  }

  selectNode(node: any) {
    this.selectedNode = node;
  }


  async GetAllRecete() {
    const allReceteler = await this.StokService.list(0,1000)
    this.dataSource = allReceteler;
    this.totalRecords = allReceteler.count;

    this.dataSource.items.forEach(element => {
      if (element.parentId="00000000-0000-0000-0000-000000000000") {
        element.parentId=null
      }
    });
    var tree = createTree(this.dataSource.items);
    this.menu = tree.map(x => this.toNode(x));
    console.log(tree)
    this.calculateLastYearTotal()

  }



  calculateLastYearTotal() {
    let total = 0;
    for (let sale of this.res) {
      total += sale.birimFiyat * (sale.miktar) * (sale.adet);
    }
    this.totalHesap = total;

  }




  receteCardAdd(event) {
    this.StokCardDialogService.StokCardAddDialog(() => {
    
      this.GetAllRecete()
    })

  }
  receteChildCardAdd(event) {
    if (this.treeItemSelect!=undefined) {
      this.StokCardDialogService.StokChildCardAddDialog(this.treeItemSelect, () => {
    
        this.GetAllRecete()
      })
    }


  }
  StokItem:any;
  onRowSelect(event: any) {
    this.StokItem = event.data;

  }
  onRowUnSelect() {
    this.StokItem = null
  }





}



function findParent(arr, id) {
  return arr.find((parent) => parent.id === id);
}

function createTreeNode(value) {
  return {
    id: value.id,
    name: value.ad,
    stokAdi: value.stokAdi,
    birimAdi: value.birimAdi,
    birimFiyat: value.birimFiyat,
    stokTuru: value.stokTuru,
    adet: value.adet,
    olcu: value.olcu,
    miktar: value.miktar,
    submenu: (value.submenu !== undefined)
      ? value.submenu.map(createTreeNode)
      : undefined
  };
}

function createTree(data) {
  return data
    .reduce((result, value, index, originalArray) => {
      if (value.parentId !== null) {
        const parent = findParent(originalArray, value.parentId);
        if (parent) {
          parent.submenu = (parent.submenu || []).concat(value);
        }
        return result;
      } else {
        return result.concat(value);
      }
    }, [])
    .map(createTreeNode);
}