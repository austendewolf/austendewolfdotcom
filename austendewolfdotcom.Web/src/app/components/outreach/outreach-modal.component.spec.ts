import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachModalComponent } from './outreach-modal.component';

describe('OutreachComponent', () => {
  let component: OutreachModalComponent;
  let fixture: ComponentFixture<OutreachModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutreachModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutreachModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
