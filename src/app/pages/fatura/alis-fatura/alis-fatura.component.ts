import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alis-fatura',
  templateUrl: './alis-fatura.component.html',
  styleUrls: ['./alis-fatura.component.scss']
})
export class AlisFaturaComponent implements OnInit {
  alisFaturaItem:any;
  dataSource: any;
  selectedItem: any;
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
  }

  public frm: FormGroup = this.fb.group({

    kod: [null, [Validators.required, Validators.maxLength(16)]],
    ad: [null, [Validators.required, Validators.maxLength(16)]],

  });
  get kod() { return this.frm.get('kod') }
  get ad() { return this.frm.get('ad') }





  onRowSelect(event: any) {
    this.alisFaturaItem = event.data;

  }
  onRowUnSelect() {
    this.alisFaturaItem = null
  }

































  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
