import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaliyetHesaplamaComponent } from './maliyet-hesaplama.component';

describe('MaliyetHesaplamaComponent', () => {
  let component: MaliyetHesaplamaComponent;
  let fixture: ComponentFixture<MaliyetHesaplamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaliyetHesaplamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaliyetHesaplamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
