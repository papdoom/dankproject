import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmpOneComponent } from './new-cmp-one.component';

describe('NewCmpOneComponent', () => {
  let component: NewCmpOneComponent;
  let fixture: ComponentFixture<NewCmpOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmpOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
