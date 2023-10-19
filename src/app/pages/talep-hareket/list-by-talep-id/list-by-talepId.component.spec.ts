import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByTalepIdComponent } from './list-by-talepId.component';

describe('ListByTalepIdComponent', () => {
  let component: ListByTalepIdComponent;
  let fixture: ComponentFixture<ListByTalepIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListByTalepIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListByTalepIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
