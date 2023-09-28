import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMasrafComponent } from './card-masraf.component';

describe('CardMasrafComponent', () => {
  let component: CardMasrafComponent;
  let fixture: ComponentFixture<CardMasrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMasrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMasrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
