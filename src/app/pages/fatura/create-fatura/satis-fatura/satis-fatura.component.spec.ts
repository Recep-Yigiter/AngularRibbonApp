import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisFaturaComponent } from './satis-fatura.component';

describe('SatisFaturaComponent', () => {
  let component: SatisFaturaComponent;
  let fixture: ComponentFixture<SatisFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisFaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatisFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
