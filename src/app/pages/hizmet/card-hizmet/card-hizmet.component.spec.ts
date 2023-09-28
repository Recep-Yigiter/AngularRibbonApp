import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHizmetComponent } from './card-hizmet.component';

describe('CardHizmetComponent', () => {
  let component: CardHizmetComponent;
  let fixture: ComponentFixture<CardHizmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHizmetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHizmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
