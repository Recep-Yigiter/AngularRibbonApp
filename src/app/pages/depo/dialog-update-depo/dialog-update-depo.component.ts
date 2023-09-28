import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-update-depo',
  templateUrl: './dialog-update-depo.component.html',
  styleUrls: ['./dialog-update-depo.component.scss']
})
export class DialogUpdateDepoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
