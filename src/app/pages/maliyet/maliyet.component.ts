import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
declare var $: any;


@Component({
  selector: 'app-maliyet',
  templateUrl: './maliyet.component.html',
  styleUrls: ['./maliyet.component.scss']
})
export class MaliyetComponent implements OnInit {
  ngOnInit(): void {



  }

  index = 0;
  menu: any;
  expand = {};

  selectedNode = undefined;
  denemeArray: any;
  deneme(test: any) {
    this.denemeArray = test
    
    let res = [];
    this.denemeArray.submenu.map( s  => {
      res = [...res, s]

      if (s.submenu.length > 0) {
        s.submenu.map(c => {
          res = [...res, c]
        })
      }
    })
    console.log(res)





  }

  constructor() {

    this.menu = Menu.map(x => this.toNode(x));
  }

  private toNode(x: any): any {
    const y: any = { ...x };
    y.index = ++this.index;
    for (let n = 0; n < y.submenu.length; n++) {
      y.submenu[n] = this.toNode(y.submenu[n])
    }
    return y;
  }

  toggleVisible(node: any) {
    if (node.submenu && node.submenu.length) {
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



  // collapsibleSidebar() {
  //   $(document).ready(function () {
  //     var allFolders = $(".directory-list li > ul");
  //     allFolders.each(function () {
  //       var folderAndName = $(this).parent();
  //       folderAndName.addClass("folder");
  //       var backupOfThisFolder = $(this);
  //       $(this).remove();
  //       folderAndName.wrapInner("<a href='#'/>");
  //       folderAndName.append(backupOfThisFolder);
  //       folderAndName.find("a").click(function (e) {
  //         $(this).siblings("ul").slideToggle("fast");
  //         e.preventDefault();
  //       });

  //     });
  //   });
  // }

}
