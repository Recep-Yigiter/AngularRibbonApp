import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-depo-card',
  templateUrl: './depo-card.component.html',
  styleUrls: ['./depo-card.component.scss']
})
export class DepoCardComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }


  public frm = this.fb.group({
    ad: [null, [Validators.required, Validators.maxLength(50)]],
    aciklama: [null],
  })
  get ad() { return this.frm.get('ad') }
  get aciklama() { return this.frm.get('aciklama') }




}
