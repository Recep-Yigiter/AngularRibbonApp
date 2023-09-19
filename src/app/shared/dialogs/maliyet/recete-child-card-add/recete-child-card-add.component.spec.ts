import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceteChildCardAddComponent } from './recete-child-card-add.component';

describe('ReceteChildCardAddComponent', () => {
  let component: ReceteChildCardAddComponent;
  let fixture: ComponentFixture<ReceteChildCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceteChildCardAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceteChildCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
