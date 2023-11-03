import { ChangeDetectorRef, Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectDepoComponent } from 'src/app/pages/depo/dialog-select-depo/dialog-select-depo.component';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'depo-inline-select-input',
  templateUrl: './depo-inline-select-input.html',
  styleUrls: ['./depo-inline-select-input.scss']
})
export class DepoInlineSelectInput {
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
      componentType: DialogSelectDepoComponent,
      data: this.selectedData,
      afterClose: () => { }
    }, (data) => {
        this.selectedData = data;
       this.childFunc.emit(this.selectedData)
      })


  }
}
