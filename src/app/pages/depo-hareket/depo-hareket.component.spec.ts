import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoHareketComponent } from './depo-hareket.component';

describe('DepoHareketComponent', () => {
  let component: DepoHareketComponent;
  let fixture: ComponentFixture<DepoHareketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepoHareketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepoHareketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
