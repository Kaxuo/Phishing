import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSendComponent } from './confirmation-send.component';

describe('ConfirmationSendComponent', () => {
  let component: ConfirmationSendComponent;
  let fixture: ComponentFixture<ConfirmationSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationSendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
