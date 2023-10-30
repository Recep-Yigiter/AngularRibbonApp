import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatinalmaTabComponent } from './satinalma-tab.component';

describe('SatinalmaTabComponent', () => {
  let component: SatinalmaTabComponent;
  let fixture: ComponentFixture<SatinalmaTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatinalmaTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatinalmaTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
