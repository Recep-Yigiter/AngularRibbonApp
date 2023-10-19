import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaHareketComponent } from './fatura-hareket.component';

describe('FaturaHareketComponent', () => {
  let component: FaturaHareketComponent;
  let fixture: ComponentFixture<FaturaHareketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturaHareketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturaHareketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
