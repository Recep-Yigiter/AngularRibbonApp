import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { MatRadioButton } from '@angular/material/radio';
import { DialogUpdateChildReceteComponent } from '../dialog-update-child-recete/dialog-update-child-recete.component';
import { IscilikService } from '../../../iscilik/services/iscilik.service';
import { IscilikTreeViewService } from '../../../iscilik/services/iscilik-treeview.service';
import { ReceteService } from '../services/recete.service';
import { ReceteTreeViewService } from '../services/recete-treeview.service';
import { DialogAddReceteComponent } from '../dialog-add-recete/dialog-add-recete.component';
import { DialogAddChildReceteComponent } from '../dialog-add-child-recete/dialog-add-child-recete.component';
import { DialogUpdateReceteComponent } from '../dialog-update-recete/dialog-update-recete.component';

@Component({
  selector: 'app-card-recete',
  templateUrl: './card-recete.component.html',
  styleUrls: ['./card-recete.component.scss']
})
export class CardReceteComponent implements OnInit {
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
    private CustomDialogService: CustomDialogService,
    private ReceteTreeViewService: ReceteTreeViewService,
    private iscilikService: IscilikService,
    private IscilikTreeViewService: IscilikTreeViewService
  ) {
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

  addNewCardDialog() {
    this.CustomDialogService.smallDialog({
      componentType: DialogAddReceteComponent,
      data: this.selectedNode,
      afterClose: () => { this.GetAllRecete() }
    })
  }
  addChildDialog() {
    if (this.selectedNode != undefined) {
      this.CustomDialogService.smallDialog({
        componentType: DialogAddChildReceteComponent,
        data: this.selectedNode,
        afterClose: () => { this.GetAllRecete(); this.selectNode(this.selectedNode) }
      })
    }
  }
  updateDialog() {
    if (this.selectedNode?.submenu == undefined) {
      this.CustomDialogService.smallDialog({
        componentType: DialogUpdateChildReceteComponent,
        data: this.selectedNode,
        afterClose: () => { this.GetAllRecete(); this.selectedNode = undefined }
      })
    }
    else {
      this.CustomDialogService.smallDialog({
        componentType: DialogUpdateReceteComponent,
        data: this.selectedNode,
        afterClose: () => { this.GetAllRecete(); this.selectedNode = undefined }
      })
    }
  }

  deleteDialog() {
    this.CustomDialogService.deleteDialog(() => {
      this.ReceteService.delete(this.selectedNode.id, () => { this.GetAllRecete(); this.selectedNode = undefined })
    })
  }









  calculateTotalMaliyet() {
    let total = 0;
    let totalIscilik = 0;
    if (this.treeViewChildList != null)
      for (let sale of this.treeViewChildList) {
        total += sale.birimFiyat * (sale.miktar) * (sale.adet) * (sale.etkinlik);
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

