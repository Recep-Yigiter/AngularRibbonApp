import { ChangeDetectionStrategy, Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogService } from 'src/app/core/services/custom-dialog.service';
import { DialogSelectTezgahComponent } from 'src/app/pages/uretim/tezgah/dialog-select-tezgah/dialog-select-tezgah.component';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'tezgah-select-input',
  templateUrl: './tezgah-select-input.html',
  styleUrls: ['./tezgah-select-input.scss']
})
export class TezgahSelectInput {
  @Input() formControlNames: any;
  @Output() public childFunc: EventEmitter<any> = new EventEmitter();
  @Input() field: any;
  @Input() label:any;
  selectedTezgahItem: any;


  constructor(private dialog: MatDialog,private CustomDialogService:CustomDialogService) { }


  filterString: any = '';

  filterPazarlamaUrunGrubus(event: any) {
    let query = event.query;
    this.filterString = query.toLowerCase();
  }

  selectedData:any;
  TezgahSelectDialogOpen() {

    this.CustomDialogService.normalDialog({
      componentType: DialogSelectTezgahComponent,
      data: this.selectedData,
      afterClose: () => { }
    }, (data) => {
       this.selectedData = data;
       this.childFunc.emit(this.selectedData)
      })

  }
}
