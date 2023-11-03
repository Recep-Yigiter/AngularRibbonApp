import { ChangeDetectorRef, Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectDepoComponent } from 'src/app/pages/depo/dialog-select-depo/dialog-select-depo.component';
import { DialogSelectStokComponent } from 'src/app/pages/stok/dialog-select-stok/dialog-select-stok.component';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'stok-inline-select-input',
  templateUrl: './stok-inline-select-input.html',
  styleUrls: ['./stok-inline-select-input.scss']
})
export class StokInlineSelectInput {
  @Input() formControlNames: any;
  @Output() public childFunc: EventEmitter<any> = new EventEmitter();
  @Input() field: any;
  @Input() label:any;
  selectedDepoItem: any;


  constructor(private dialog: MatDialog,private CustomDialogService:CustomDialogService,private readonly changeDetectorRef: ChangeDetectorRef) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  selectedData: any;
  
  DepoInlineSelectDialogOpen() {   
    this.CustomDialogService.normalDialog({
      componentType: DialogSelectStokComponent,
      data: this.selectedData,
      afterClose: () => { }
    }, (data) => {
        this.selectedData = data;
       this.childFunc.emit(this.selectedData)
      })


  }
}
