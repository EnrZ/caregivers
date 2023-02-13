import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootdropComponent } from './bootdrop.component';

describe('BootdropComponent', () => {
  let component: BootdropComponent;
  let fixture: ComponentFixture<BootdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
