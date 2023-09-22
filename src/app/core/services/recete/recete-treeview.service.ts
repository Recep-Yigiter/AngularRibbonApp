import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceteTreeViewService {
  index = 0;
  expand = {};
  res: any;
  constructor() { }
  CreateTreeView(data: any) {

    function findParent(arr, id) {
      return arr.find((parent) => parent.id === id);
    }
    function createTreeNode(value) {

      return {
        id: value.id,
        ad: value.ad,
        stokAdi: value.stokAdi,
        birimAdi: value.birimAdi,
        birimFiyat: value.birimFiyat,
        adet: value.adet,
        olcuAciklama: value.olcuAciklama,
        miktar: value.miktar,
        receteTuru: value.receteTuru,
        parentId: value.parentId,
        yarimamulAdi: value.ad,

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

    return createTree(data)


  }
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
 
    this.res.forEach(element => {
      element.yarimamulAdi=item.yarimamulAdi
    });

    return this.res;
  }


}