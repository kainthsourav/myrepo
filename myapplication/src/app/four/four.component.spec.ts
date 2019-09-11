import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FOurComponent } from './four.component';

describe('FOurComponent', () => {
  let component: FOurComponent;
  let fixture: ComponentFixture<FOurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FOurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FOurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
