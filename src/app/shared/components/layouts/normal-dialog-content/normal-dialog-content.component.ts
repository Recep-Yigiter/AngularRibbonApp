import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-dialog-content',
  templateUrl: './normal-dialog-content.component.html',
  styleUrls: ['./normal-dialog-content.component.scss']
})
export class NormalDialogContentComponent implements OnInit {
  @Input() layoutName: any;
  @Input() tableActions: any;
  @Input() topActions: any;
  constructor( private ref: ChangeDetectorRef) {
     
  }
  ngOnInit(): void {
  }

  ngAfterContentChecked() {
      this.ref.detectChanges();
  }





}
