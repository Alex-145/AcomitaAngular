import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenberComponent } from './list-menber.component';

describe('ListMenberComponent', () => {
  let component: ListMenberComponent;
  let fixture: ComponentFixture<ListMenberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMenberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMenberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
