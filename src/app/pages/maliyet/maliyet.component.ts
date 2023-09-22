import { Component, OnInit,ViewChild } from '@angular/core';

import { ReceteCardDialogService } from 'src/app/shared/dialogs/maliyet/services/recete-card-dialog.service';
import { MatRadioButton } from '@angular/material/radio';
import { ReceteTreeViewService } from 'src/app/core/services/recete/recete-treeview.service';
import { ReceteService } from 'src/app/core/services/recete/recete.service';

declare var $: any;



@Component({
  selector: 'app-maliyet',
  templateUrl: './maliyet.component.html',
  styleUrls: ['./maliyet.component.scss']
})
export class MaliyetComponent implements OnInit {



  constructor() { }
  ngOnInit(): void {



  }
}

