import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-hizmet',
  templateUrl: './dialog-add-hizmet.component.html',
  styleUrls: ['./dialog-add-hizmet.component.scss']
})
export class DialogAddHizmetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
