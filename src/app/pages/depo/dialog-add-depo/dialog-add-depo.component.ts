import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-depo',
  templateUrl: './dialog-add-depo.component.html',
  styleUrls: ['./dialog-add-depo.component.scss']
})
export class DialogAddDepoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
