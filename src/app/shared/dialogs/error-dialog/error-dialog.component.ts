import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {
  @Input() layoutName: any;
  @Input() tableActions: any;
  @Input() formTopActions: any;
  @Input() tableContent: any=true;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) { }
  deneme: any;
  ngOnInit() {
    this.deneme = [];
    console.log(this.data)
    this.data.error.Errors.forEach(element => {
      this.deneme.push(element.ErrorMessage)

    })
  }

}
