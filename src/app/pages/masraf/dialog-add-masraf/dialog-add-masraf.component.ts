import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-masraf',
  templateUrl: './dialog-add-masraf.component.html',
  styleUrls: ['./dialog-add-masraf.component.scss']
})
export class DialogAddMasrafComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
