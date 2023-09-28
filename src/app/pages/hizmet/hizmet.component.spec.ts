import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetComponent } from './hizmet.component';

describe('HizmetComponent', () => {
  let component: HizmetComponent;
  let fixture: ComponentFixture<HizmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HizmetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HizmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
