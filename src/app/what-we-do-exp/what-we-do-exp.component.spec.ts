import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoExpComponent } from './what-we-do-exp.component';

describe('WhatWeDoExpComponent', () => {
  let component: WhatWeDoExpComponent;
  let fixture: ComponentFixture<WhatWeDoExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeDoExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
