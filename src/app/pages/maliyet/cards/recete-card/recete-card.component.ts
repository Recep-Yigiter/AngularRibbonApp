import { Component, OnInit,ViewChild } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { ReceteTreeViewService } from 'src/app/core/services/recete/recete-treeview.service';
import { ReceteService } from 'src/app/core/services/recete/recete.service';
import { ReceteCardDialogService } from 'src/app/shared/dialogs/maliyet/services/recete-card-dialog.service';

@Component({
  selector: 'app-recete-card',
  templateUrl: './recete-card.component.html',
  styleUrls: ['./recete-card.component.scss']
})
export class ReceteCardComponent implements OnInit {
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
     this.toggleVisible = this.ReceteTreeViewService.toggleVisible;

  }
  ngOnInit(): void {

    this.GetAllRecete()

  }
  radioChange(){

  }

  treeItemSelect: any;
  toggleVisible:any;
  TreeItem(item: any) {
    console.log(item)
  

  }

  TreeItemSelect(item) {
    this.treeItemSelect = item

  }







  selectNode(node: any) {

    this.selectedNode = node;
    if (node.submenu!=undefined) {
      this.treeViewChildList=this.ReceteTreeViewService.treeViewChildList(node);

      this.calculateLastYearTotal()
    }
   
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

