import { Component, Injectable, Input, } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'form-content',
  templateUrl: './form-content.html',
  styleUrls: ['./form-content.scss']
})

export class FormContent {

  @Input() formTitle:any;

}