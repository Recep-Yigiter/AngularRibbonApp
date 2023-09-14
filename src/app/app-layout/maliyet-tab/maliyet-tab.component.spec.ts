import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaliyetTabComponent } from './maliyet-tab.component';

describe('MaliyetTabComponent', () => {
  let component: MaliyetTabComponent;
  let fixture: ComponentFixture<MaliyetTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaliyetTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaliyetTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
