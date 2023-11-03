import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent  {
  @Input() layoutName: any;
  @Input() tableActions: any;
  constructor( private ref: ChangeDetectorRef) {
     
  }

  ngAfterContentChecked() {
      this.ref.detectChanges();
  }





}
