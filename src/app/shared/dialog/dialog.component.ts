import { Component, Input, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/core/services/confirm-dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() formControlNames: any;
  constructor(public ConfirmDialogService:ConfirmDialogService) { }

  ngOnInit(): void {
  }

}
