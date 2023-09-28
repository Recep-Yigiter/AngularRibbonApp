import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHizmetComponent } from './list-hizmet.component';

describe('ListHizmetComponent', () => {
  let component: ListHizmetComponent;
  let fixture: ComponentFixture<ListHizmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHizmetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHizmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
