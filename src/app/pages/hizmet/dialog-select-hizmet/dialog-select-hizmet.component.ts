import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-select-hizmet',
  templateUrl: './dialog-select-hizmet.component.html',
  styleUrls: ['./dialog-select-hizmet.component.scss']
})
export class DialogSelectHizmetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
