import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-select-masraf',
  templateUrl: './dialog-select-masraf.component.html',
  styleUrls: ['./dialog-select-masraf.component.scss']
})
export class DialogSelectMasrafComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
