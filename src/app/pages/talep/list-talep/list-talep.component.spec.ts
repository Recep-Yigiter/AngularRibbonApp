import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTalepComponent } from './list-talep.component';

describe('ListTalepComponent', () => {
  let component: ListTalepComponent;
  let fixture: ComponentFixture<ListTalepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTalepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTalepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
