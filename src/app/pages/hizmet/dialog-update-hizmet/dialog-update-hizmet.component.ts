import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-update-hizmet',
  templateUrl: './dialog-update-hizmet.component.html',
  styleUrls: ['./dialog-update-hizmet.component.scss']
})
export class DialogUpdateHizmetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
