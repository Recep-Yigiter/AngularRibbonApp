import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBirimComponent } from './card-birim.component';

describe('CardBirimComponent', () => {
  let component: CardBirimComponent;
  let fixture: ComponentFixture<CardBirimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBirimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBirimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
