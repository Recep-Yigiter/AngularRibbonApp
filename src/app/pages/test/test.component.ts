import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { UrunAgaciService } from '../uretim/urun-agaci/services/urun-agaci.service';
import { UrunAgaciTreeViewService } from '../uretim/urun-agaci/services/urun-agaci-treeview.service';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogAddUrunAgaciComponent } from '../uretim/urun-agaci/dialog-add-urun-agaci/dialog-add-urun-agaci.component';
import { DialogUpdateUrunAgaciComponent } from '../uretim/urun-agaci/dialog-update-urun-agaci/dialog-update-urun-agaci.component';
import { DialogAddChildUrunAgaciComponent } from '../uretim/urun-agaci/dialog-add-child-urun-agaci/dialog-add-child-urun-agaci.component';





interface FoodNode {
  id?: any;
  ad?: any;
  kod?: any;
  birimId?: any;
  birimAdi?: any;
  birimFiyat?: any;
  stokGrup?: any;
  urunGrubu?: any;
  parentId?: any;
  stokId?: any;
  stokAdi?: any;
  stokKodu?: any;
  miktar?: any;
  tip?: any;
  durum?: any;
  submenu?: any;
}



interface ExampleFlatNode {
  expandable: boolean;
  level: number;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {


  clicked: string = '';

 @HostListener('document:click', ['$event'])
   DocumentClick(event: Event) {
     if (this.elem.nativeElement.contains(event.target))
       this.clicked = "inside";
     else
       this.clicked = "outside";
   }







  btnExpandable: boolean = true;
  displayedColumns: string[] = ['name', 'birim', 'birimFiyat'];
  index = 0;
  menu: any;
  expand = {};
  treeViewDataSource: any;
  private transformer = (node: FoodNode, level: number) => {
    return {
      id: node.id,
      ad: node.ad,
      kod: node.kod,
      birimId: node.birimId,
      birimAdi: node.birimAdi,
      birimFiyat: node.birimFiyat,
      stokGrup: node.stokGrup,
      urunGrubu: node.urunGrubu,
      parentId: node.parentId,
      stokId: node.stokId,
      stokAdi: node.stokAdi,
      stokKodu: node.stokKodu,
      miktar: node.miktar,
      tip: node.tip,
      durum: node.durum,
      submenu: node.submenu,
      expandable: !!node.submenu && node.submenu.length > 0,
      level: level,
    };
  }



  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable

  );

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level,
    node => node.expandable, node => node.submenu);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private UrunAgaciService: UrunAgaciService,private elem: ElementRef,
    private UrunAgaciTreeViewService: UrunAgaciTreeViewService,
    private customDialogService: CustomDialogService) {

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


    this.dataSource.data = tree.map(x => this.UrunAgaciTreeViewService.toNode(x));

    this.selectedNode = null;


 
    for (let i = 0; i < this.parentList.count; i++) {
      this.treeControl.toggle(this.treeControl.dataNodes[i]);

    }

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  selectedNode = undefined;
  parentList: any=[];
  rowClick(test) {
    this.selectedNode = test;
    this.parentList = this.getAncestors(this.dataSource.data, this.selectedNode.id)
  }

  getAncestors(array, id) {
    if (typeof array !== 'undefined') {

      for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          return [array[i]];
        }
        const a = this.getAncestors(array[i].submenu, id);
        if (a !== null) {
          a.unshift(array[i]);
          return a;
        }
      }
    }
    return null;
  }


  selectedUrunGrubu:any;
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
        afterClose: () => {
          this.TreeViewList()
        }
      })
    }
    else {
      this.customDialogService.largeDialog({
        componentType: DialogUpdateUrunAgaciComponent,
        data: this.selectedNode,
        afterClose: () => {
          this.TreeViewList()
        }
      })
    }


  }
  deleteDialog() {

    if (this.selectedNode.submenu == undefined || this.selectedNode == null) {
      this.customDialogService.deleteDialog(() => {


        this.UrunAgaciService.delete(this.selectedNode.id, () => { this.TreeViewList() });
      })
    }


  }
  selectNode(node: any) {
   
    this.selectedNode = node;
    

  }
  async selectedTabChange(event) {
    this.treeViewDataSource = [];
    const getList = await this.UrunAgaciService.GetList();
    this.treeViewDataSource = getList;
    const deneme = this.treeViewDataSource.data.items.filter(d => d.urunGrubu == event.tab.textLabel);
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
    

  }
}
