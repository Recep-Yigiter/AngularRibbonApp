import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-dialog-content',
  templateUrl: './large-dialog-content.component.html',
  styleUrls: ['./large-dialog-content.component.scss']
})
export class LargeDialogContentComponent {
  @Input() layoutName: any;
  @Input() tableActions: any;
  @Input() formTopActions: any;
  constructor( private ref: ChangeDetectorRef) {
     
  }

  ngAfterContentChecked() {
      this.ref.detectChanges();
  }





}
