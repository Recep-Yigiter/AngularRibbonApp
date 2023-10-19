import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerilenTeklifComponent } from './verilen-teklif.component';

describe('VerilenTeklifComponent', () => {
  let component: VerilenTeklifComponent;
  let fixture: ComponentFixture<VerilenTeklifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerilenTeklifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerilenTeklifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
