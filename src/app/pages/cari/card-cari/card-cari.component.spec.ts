import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCariComponent } from './card-cari.component';

describe('CardCariComponent', () => {
  let component: CardCariComponent;
  let fixture: ComponentFixture<CardCariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
