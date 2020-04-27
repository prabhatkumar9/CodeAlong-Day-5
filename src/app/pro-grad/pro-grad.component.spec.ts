import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProGradComponent } from './pro-grad.component';

describe('ProGradComponent', () => {
  let component: ProGradComponent;
  let fixture: ComponentFixture<ProGradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProGradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProGradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
