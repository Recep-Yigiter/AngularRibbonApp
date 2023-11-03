import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-urun-agaci',
  templateUrl: './dialog-add-urun-agaci.component.html',
  styleUrls: ['./dialog-add-urun-agaci.component.scss']
})
export class DialogAddUrunAgaciComponent implements OnInit {

  selectedItem: any;
  urunAgaciItem: any;
  durums: any[] = [{ key: "Aktif", checked: true }, { key: "Pasif", checked: false }, { key: "Tasarım", checked: false }];
  tips: any[] = [{ key: "Montaj", checked: true }, { key: "Proses", checked: false }];
  selectedDurum: string;
  selectedTip: string;
  disabledInput = "background-color:#ebebeb;";
  dataSource: any[];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.selectedDurum = 'Aktif';
    this.selectedTip = 'Proses';
    this.dataSource=[{ad:"",miktar:0}];
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  public frm: FormGroup = this.fb.group({
    ustUrunAgaciAdi: [null, [Validators.required, Validators.maxLength(16)]],
    ustUrunAgaciKodu: [null, [Validators.required, Validators.maxLength(16)]],
    urunAgaciAdi: [null, [Validators.required, Validators.maxLength(16)]],
    urunAgaciKodu: [null, [Validators.required, Validators.maxLength(16)]],
  });
  get ustUrunAgaciAdi() { return this.frm.get('ustUrunAgaciAdi') }
  get ustUrunAgaciKodu() { return this.frm.get('ustUrunAgaciKodu') }
  get urunAgaciAdi() { return this.frm.get('urunAgaciAdi') }
  get urunAgaciKodu() { return this.frm.get('urunAgaciKodu')}


  onRowSelect(event: any) { this.urunAgaciItem = event.data; }
  onRowUnSelect() { this.urunAgaciItem = null; }
  durumChange(item) { this.selectedDurum = item; }
  tipChange(item) { this.selectedTip = item; }

  stokSelectItem: any;
  stokSelectItemKod: any;
  stokSelectItemAd: any;
  stokChildFunc(item) {
    this.stokSelectItem = item;
    this.stokSelectItemAd = item.ad;
    this.stokSelectItemKod = item.kod;
    this.dataSource=[];
    this.stokSelectItem.miktar=0;
    this.dataSource.push(this.stokSelectItem);
  }

  depoSelectItem: any;
  depoSelectItemKod: any;
  depoSelectItemAd: any;
  depoChildFunc(item) {
    this.depoSelectItem = item;
    this.depoSelectItemAd = item.ad;
    this.depoSelectItemKod = item.kod;

  }









  getFilter(event: Event): any {
    return (event.target as HTMLInputElement).value;
  }

}
