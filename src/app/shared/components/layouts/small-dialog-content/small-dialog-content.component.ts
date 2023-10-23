import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-dialog-content',
  templateUrl: './small-dialog-content.component.html',
  styleUrls: ['./small-dialog-content.component.scss']
})
export class SmallDialogContentComponent implements OnInit {
  @Input() layoutName: any;
  @Input() tableActions: any;
  @Input() formTopActions: any;
  @Input() tableContent: any=true;
  
  constructor( private ref: ChangeDetectorRef) {
     
  }
  ngOnInit(): void {
  }

  ngAfterContentChecked() {
      this.ref.detectChanges();
  }





}
