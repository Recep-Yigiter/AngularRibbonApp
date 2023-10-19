import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeklifHareketComponent } from './teklif-hareket.component';

describe('TeklifHareketComponent', () => {
  let component: TeklifHareketComponent;
  let fixture: ComponentFixture<TeklifHareketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeklifHareketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeklifHareketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
