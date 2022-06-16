import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSonComponent } from './list-son.component';

describe('ListSonComponent', () => {
  let component: ListSonComponent;
  let fixture: ComponentFixture<ListSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
