import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTezgahComponent } from './list-tezgah.component';

describe('ListTezgahComponent', () => {
  let component: ListTezgahComponent;
  let fixture: ComponentFixture<ListTezgahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTezgahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTezgahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
