import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceteComponent } from './recete.component';

describe('ReceteComponent', () => {
  let component: ReceteComponent;
  let fixture: ComponentFixture<ReceteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
