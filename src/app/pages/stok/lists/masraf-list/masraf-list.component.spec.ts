import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasrafListComponent } from './masraf-list.component';

describe('MasrafListComponent', () => {
  let component: MasrafListComponent;
  let fixture: ComponentFixture<MasrafListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasrafListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasrafListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
