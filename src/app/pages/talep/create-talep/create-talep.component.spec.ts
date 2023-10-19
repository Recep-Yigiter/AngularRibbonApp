import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTalepComponent } from './create-talep.component';

describe('CreateTalepComponent', () => {
  let component: CreateTalepComponent;
  let fixture: ComponentFixture<CreateTalepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTalepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTalepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
