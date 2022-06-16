import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenberComponent } from './create-menber.component';

describe('CreateMenberComponent', () => {
  let component: CreateMenberComponent;
  let fixture: ComponentFixture<CreateMenberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMenberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMenberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
