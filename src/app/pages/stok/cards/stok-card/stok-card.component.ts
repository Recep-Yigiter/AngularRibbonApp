import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { ReceteTreeViewService } from '../../services/recete-tree-view.service';
import { StokCardDialogService } from 'src/app/shared/dialogs/stok/services/stok-card-dialog.service';

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
export class StokCardComponent implements OnDestroy {
  activeNode:any;
  open=true;
  constructor(private ReceteTreeViewService:ReceteTreeViewService,private fb:FormBuilder,private StokCardDialogService:StokCardDialogService) {
    this.treeSource = new MatTreeNestedDataSource<TreeViewItemModel>();     
    this.dataSource$ = new BehaviorSubject<TreeViewItemModel[]>([]);
    this.dataSource$.subscribe(items => {
      this.treeSource.data = null;
      this.treeSource.data = items;

    });

    this.initData();









  }


  public frm: FormGroup = this.fb.group({
    stokKod: [null],
    stokKisaAd: [null],
    stokTuru: [null],
    alisKdvOrani: [null],
    satisKdvOrani: [null],
  });
  get stokKod() { return this.frm.get('stokKod') }
  get stokKisaAd() { return this.frm.get('stokKisaAd') }
  get stokTuru() { return this.frm.get('stokTuru') }
  get alisKdvOrani() { return this.frm.get('alisKdvOrani') }
  get satisKdvOrani() { return this.frm.get('satisKdvOrani') }

 
  private static _id = 0;
  readonly dataSource$: BehaviorSubject<TreeViewItemModel[]>;
  readonly treeSource: MatTreeNestedDataSource<TreeViewItemModel>;

  readonly treeControl = new NestedTreeControl<TreeViewItemModel>(node => node.subFolders );

  readonly hasChild = (_: number, node: TreeViewItemModel) => !!node.subFolders && node.subFolders.length > 0;

  readonly trackBy = (_: number, node: TreeViewItemModel) => node.id;

  /** destroy */
  ngOnDestroy() {
    this.dataSource$.complete();
  }

  /** init tree data */
  list$:any
 async initData() {

    const allStoks=await this.ReceteTreeViewService.list(0,100,()=>{} )
  console.log(allStoks)
    this.list$= allStoks;
    this.treeSource.data= await (await this.ReceteTreeViewService.list())
    this.dataSource$.next(this.list$)
  }

  displayModal:boolean=false;
  hareketEvent:TreeViewItemModel;
  hareketItemAdi:any;
  addOpenDialog(event?:TreeViewItemModel){
  this.StokCardDialogService.StokCardAddDialog(event,(data)=>{
    this.ad(data.hareketAdi,event);
    
    this.hareketItemAdi=data.hareketAdi;

  } )
     this.hareketEvent=event;
    // this.displayModal=true;
   
  }
  /** add */
  ad(hareketAdi?:any,node?: TreeViewItemModel) {


      node=this.hareketEvent;
      
    
    const newItem = this._createTreeItem(hareketAdi);

    // add as child
    if (node) {
      node.subFolders = [
        ...(node.subFolders || []),
        newItem
      ];
      if (!this.treeControl.isExpanded(node)) {
        this.treeControl.expand(node);
      }
    }
  
    else {
      this.dataSource$.next([
        ...this.dataSource$.value,
        newItem
      ]);


    }

    this.dataSource$.next(this.dataSource$.value);
  
    console.log(this.dataSource$.value)
    this.displayModal=false;
    this.frm.reset()
    
  }
toggle:boolean=false;
  change(){
this.toggle=!this.toggle;
  }

  // toggleNode(node: TreeItem) {
  //   this.treeControl.toggle(node);
  // }

  
  private _createTreeItem(hareketAdi: string, ...subFolders: TreeViewItemModel[]): TreeViewItemModel {
    return {
      id: null,
      name: hareketAdi,
      subFolders: subFolders, 
      parentId:this.hareketEvent?.id?this.hareketEvent?.id:null,
      stokAdi:this.selectStok?this.selectStok:null,
      stokId:this.selectStokId?this.selectStokId:null
    };
  }




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

  ekle(item: any) {
    console.log(item)
  }

  sil(item: any) {
   console.log(item)
  }


  selectStokId:any;
  selectStok:any;
  stokChildFunc(event){
 
    this.selectStokId = event.id;
    this.selectStok = event;
  }
}
