import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalepHareketComponent } from './talep-hareket.component';

describe('TalepHareketComponent', () => {
  let component: TalepHareketComponent;
  let fixture: ComponentFixture<TalepHareketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalepHareketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalepHareketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
