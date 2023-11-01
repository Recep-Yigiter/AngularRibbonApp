import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUrunAgaciComponent } from './card-urun-agaci.component';

describe('CardUrunAgaciComponent', () => {
  let component: CardUrunAgaciComponent;
  let fixture: ComponentFixture<CardUrunAgaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUrunAgaciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUrunAgaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
