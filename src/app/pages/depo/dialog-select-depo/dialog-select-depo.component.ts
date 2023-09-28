import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-select-depo',
  templateUrl: './dialog-select-depo.component.html',
  styleUrls: ['./dialog-select-depo.component.scss']
})
export class DialogSelectDepoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
