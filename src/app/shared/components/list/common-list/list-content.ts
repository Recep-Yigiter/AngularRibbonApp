import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'list-content',
  templateUrl: './list-content.html',
  styleUrls: ['./list-content.scss']
})

export class ListContent {

  @Input() totalRecords:any;
  @Input() listName:any;
}