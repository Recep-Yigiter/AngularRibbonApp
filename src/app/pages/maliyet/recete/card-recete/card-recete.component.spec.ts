import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReceteComponent } from './card-recete.component';

describe('CardReceteComponent', () => {
  let component: CardReceteComponent;
  let fixture: ComponentFixture<CardReceteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReceteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReceteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
