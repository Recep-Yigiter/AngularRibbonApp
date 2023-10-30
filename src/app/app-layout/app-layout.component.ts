import { Component, Input, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../core/services/confirm-dialog.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor(public confirmDialogService:ConfirmDialogService) { }

  ngOnInit(): void {
  
  }

  name = 'Angular';
  techs=["Angular","React","Vue"];
  show=false;
}
