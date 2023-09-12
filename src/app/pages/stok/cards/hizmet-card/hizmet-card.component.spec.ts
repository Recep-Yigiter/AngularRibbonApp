import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetCardComponent } from './hizmet-card.component';

describe('HizmetCardComponent', () => {
  let component: HizmetCardComponent;
  let fixture: ComponentFixture<HizmetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HizmetCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizmetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
