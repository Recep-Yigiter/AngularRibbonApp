import { Component, OnInit,ViewChild } from '@angular/core';
import { Menu } from './menu';
import { PageEvent } from '@angular/material/paginator';
import { ReceteService } from './services/recete.service';
import { ReceteCardDialogService } from 'src/app/shared/dialogs/maliyet/services/recete-card-dialog.service';
import { MatRadioButton } from '@angular/material/radio';
import { ReceteTreeViewService } from 'src/app/core/services/recete/recete-treeview.service';

declare var $: any;



@Component({
  selector: 'app-maliyet',
  templateUrl: './maliyet.component.html',
  styleUrls: ['./maliyet.component.scss']
})
export class MaliyetComponent implements OnInit {
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
  treeViewChildList:any;
  @ViewChild('first') matRadioButton : MatRadioButton;
  constructor(private ReceteService: ReceteService, private ReceteCardDialogService: ReceteCardDialogService,private ReceteTreeViewService:ReceteTreeViewService) {
    setTimeout(() =>{
     this.matRadioButton._elementRef.nativeElement.click();
     this.matRadioButton.checked = true;
     } ,10)


  }
  ngOnInit(): void {

    this.GetAllRecete()

  }
  radioChange(){
    console.log(this.selectedCategory)
  }

  treeItemSelect: any;

  TreeItem(item: any) {
    this.treeViewChildList=this.ReceteTreeViewService.treeViewChildList(item)
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
    const allReceteler = await this.ReceteService.list()
    this.dataSource = allReceteler;
    this.totalRecords = allReceteler.count;
    var tree = createTree(this.dataSource);
    this.menu = tree.map(x => this.toNode(x));

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
    this.ReceteCardDialogService.ReceteCardAddDialog(() => {
      console.log("işlem basarılı")
      this.GetAllRecete()
    })

  }
  receteChildCardAdd(event) {
    if (this.treeItemSelect!=undefined) {
      this.ReceteCardDialogService.ReceteChildCardAddDialog(this.treeItemSelect, () => {
    
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
    name: value.name,
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