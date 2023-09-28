import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatinalmaComponent } from './satinalma.component';

describe('SatinalmaComponent', () => {
  let component: SatinalmaComponent;
  let fixture: ComponentFixture<SatinalmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatinalmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatinalmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
