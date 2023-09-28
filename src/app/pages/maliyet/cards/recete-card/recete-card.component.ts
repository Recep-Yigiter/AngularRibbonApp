import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatRadioButton } from '@angular/material/radio';
import { IscilikTreeViewService } from 'src/app/core/services/iscilik/iscilik-treeview.service';
import { IscilikService } from 'src/app/core/services/iscilik/iscilik.service';
import { ReceteTreeViewService } from 'src/app/core/services/recete/recete-treeview.service';
import { ReceteService } from 'src/app/core/services/recete/recete.service';
import { ReceteCardDialogService } from 'src/app/shared/dialogs/maliyet/services/recete-card-dialog.service';

@Component({
  selector: 'app-recete-card',
  templateUrl: './recete-card.component.html',
  styleUrls: ['./recete-card.component.scss'],


})
export class ReceteCardComponent implements OnInit {
  index = 0;
  menu: any;
  expand = {};
  dataSource: any;
  totalRecords: number;
  totalHesap: any;
  totalHesapIscilik: any;
  selectedNode = undefined;
  res: any = []
  selectedReceteItem: any;
  selectedCategory: any = "1";
  treeViewChildList: any;
  @ViewChild('first') matRadioButton: MatRadioButton;
  constructor(
    private ReceteService: ReceteService,
    private ReceteDialogService: ReceteCardDialogService,
    private ReceteTreeViewService: ReceteTreeViewService,
    private iscilikService: IscilikService,
    private IscilikTreeViewService: IscilikTreeViewService) {
    setTimeout(() => {

      this.matRadioButton._elementRef.nativeElement.click();
      this.matRadioButton.checked = true;
    }, 10)
    this.toggleVisible = this.ReceteTreeViewService.toggleVisible;

  }
  ngOnInit(): void {

    this.GetAllRecete();
    this.GetAllIscilik();

  }
  radioChange() {

  }

  treeItemSelect: any;
  toggleVisible: any;
  TreeItem(item: any) {



  }

  TreeItemSelect(item) {
    this.treeItemSelect = item

  }






  treeViewChildIscilikList: any;
  selectNode(node: any) {

    this.selectedNode = node;
    if (node.submenu != undefined && this.ReceteTreeViewService.treeViewChildList(node) != undefined) {

      this.treeViewChildList = this.ReceteTreeViewService.treeViewChildList(node).filter(c => c.receteTuru !== "YariMamul");
  
      this.treeViewChildIscilikList = []
      this.treeViewChildIscilikList = this.dataSourceIscilik.filter(c => c.receteId == this.selectedNode.id);




    }
    this.calculateTotalMaliyet();
  }


  async GetAllRecete() {
    const allReceteler = await this.ReceteService.GetList()
    this.dataSource = allReceteler.data.items;

    this.dataSource.forEach(element => {

      if (element.parentId == "00000000-0000-0000-0000-000000000000" || element.parentId == null) {
        element.parentId = null
      } else {
        element.parentId = element.parentId
      }
    });

    var tree = this.ReceteTreeViewService.CreateTreeView(this.dataSource);
    this.menu = tree.map(x => this.ReceteTreeViewService.toNode(x));

    this.calculateTotalMaliyet()
  }

  dataSourceIscilik: any;
  dataSourceIscilikTree: any;
  menuIscilik: any;
  async GetAllIscilik() {


    const allIscilikler = await this.iscilikService.GetList()
    this.dataSourceIscilik = allIscilikler.data.items;

    this.dataSourceIscilik.forEach(element => {

      if (element.parentId == "00000000-0000-0000-0000-000000000000" || element.parentId == null) {
        element.parentId = null
      } else {
        element.parentId = element.parentId
      }
    });
    this.dataSourceIscilikTree = this.IscilikTreeViewService.CreateTreeView(this.dataSourceIscilik);
    this.menuIscilik = this.dataSourceIscilikTree.map(x => this.IscilikTreeViewService.toNode(x));

  }



  addDialog() {
    this.ReceteDialogService.addDialog(() => {
      this.GetAllRecete()
    })
  }
  addChildDialog() {
    if (this.selectedNode != undefined) {
      this.ReceteDialogService.addChildDialog(this.selectedNode, () => {
        this.GetAllRecete()
        this.selectNode(this.selectedNode)
      })
    }
  }
  updateChildDialog() {
    if (this.selectedNode != undefined && this.receteItem) {
      this.ReceteDialogService.updateChildDialog(this.receteItem, () => {
        this.GetAllRecete()
      })
    }
  }










  calculateTotalMaliyet() {
    let total = 0;
    let totalIscilik = 0;
    if (this.treeViewChildList != null)
      for (let sale of this.treeViewChildList) {
        total += sale.birimFiyat * (sale.miktar) * (sale.adet)*(sale.etkinlik);
      }
    this.totalHesap = total;

    if (this.treeViewChildIscilikList != null)
      for (let sale of this.treeViewChildIscilikList) {
        totalIscilik += (sale.gunlukCalismaSaati / sale.gunlukUretimSayisi) * ((sale.calisanSayisi * sale.kisiBasiAylikBrutUcret) / 240);

      }
    this.totalHesapIscilik = totalIscilik;


  }

  receteItem: any;
  onRowSelect(event: any) {
    this.receteItem = event.data;

  }
  onRowUnSelect() {
    this.receteItem = null
  }













  activeNode: any;
  open = true;
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, item: any) {
    event.preventDefault();

    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }
}

