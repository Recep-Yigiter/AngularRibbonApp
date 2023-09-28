import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirimComponent } from './birim.component';

describe('BirimComponent', () => {
  let component: BirimComponent;
  let fixture: ComponentFixture<BirimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
