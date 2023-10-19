import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalepComponent } from './talep.component';

describe('TalepComponent', () => {
  let component: TalepComponent;
  let fixture: ComponentFixture<TalepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
