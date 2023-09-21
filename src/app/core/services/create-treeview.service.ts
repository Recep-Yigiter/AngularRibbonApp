import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CreateTreeViewService {

    constructor() { }

    CreateTreeView(data:any) {
     
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

      return createTree(data)

        
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