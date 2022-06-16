import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSonComponent } from './create-son.component';

describe('CreateSonComponent', () => {
  let component: CreateSonComponent;
  let fixture: ComponentFixture<CreateSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
