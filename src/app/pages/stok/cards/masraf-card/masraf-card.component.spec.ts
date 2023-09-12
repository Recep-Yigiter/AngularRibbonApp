import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasrafCardComponent } from './masraf-card.component';

describe('MasrafCardComponent', () => {
  let component: MasrafCardComponent;
  let fixture: ComponentFixture<MasrafCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasrafCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasrafCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
