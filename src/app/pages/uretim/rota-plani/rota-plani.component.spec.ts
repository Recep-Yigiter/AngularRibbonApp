import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaPlaniComponent } from './rota-plani.component';

describe('RotaPlaniComponent', () => {
  let component: RotaPlaniComponent;
  let fixture: ComponentFixture<RotaPlaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotaPlaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaPlaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
