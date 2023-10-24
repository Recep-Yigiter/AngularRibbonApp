import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  @Input() layoutName: any;
  @Input() tableActions: any;
  @Input() topActions: any=false;

  constructor(private ref: ChangeDetectorRef) {

  }
  ngOnInit(): void {

  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }



}
