import { Component, OnInit } from '@angular/core';
import { BirimService } from 'src/app/core/services/birim/birim.service';
import { BirimDialogService } from 'src/app/shared/dialogs/birim/services/birim-dialog.service';

@Component({
  selector: 'app-birim',
  templateUrl: './birim.component.html',
  styleUrls: ['./birim.component.scss']
})
export class BirimComponent implements OnInit {
  dataSource: any;
  totalRecords: number;
  BirimItem: any;
  selectedItem: any;
  constructor(private BirimService: BirimService, private birimDialogService: BirimDialogService) { }

  ngOnInit(): void {
    this.getAll()
  }




  async getAll() {
    const getAll = await this.BirimService.list(() => {

    })

    this.dataSource = getAll.data.items


  }
  onRowSelect(event: any) {
    this.BirimItem = event.data;

  }
  onRowUnSelect() {
    this.BirimItem = null
  }

  addDialog() {
    this.birimDialogService.addDialog(() => { this.getAll() })
  }
  updateDialog() {
    this.birimDialogService.updateDialog(this.BirimItem,() => { this.getAll() })
  }



  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }
}
