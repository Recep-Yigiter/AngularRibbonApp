import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStokComponent } from './card-stok.component';

describe('CardStokComponent', () => {
  let component: CardStokComponent;
  let fixture: ComponentFixture<CardStokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
