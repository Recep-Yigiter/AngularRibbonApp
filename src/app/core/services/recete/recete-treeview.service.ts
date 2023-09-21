import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceteTreeViewService {
  index = 0;
  expand = {};
  res: any;
  constructor() { }

  toNode(x: any): any {
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


  treeViewChildList(item: any) {

    var array = [];


    array.push(item)
    const collect = (n, out = []) => {

      for (const { submenu, ...item } of n) {
        out.push(item);
        submenu?.length && collect(submenu, out);
      }
      return out;
    };

    const result = array.map(({ submenu, ...item }) => ({ ...item, submenu: collect(submenu) }));

    this.res = result[0].submenu


  }


}