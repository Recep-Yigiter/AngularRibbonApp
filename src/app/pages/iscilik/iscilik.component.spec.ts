import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscilikComponent } from './iscilik.component';

describe('IscilikComponent', () => {
  let component: IscilikComponent;
  let fixture: ComponentFixture<IscilikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IscilikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IscilikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
