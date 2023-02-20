import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyModalComponent } from './ready-modal.component';

describe('ReadyModalComponent', () => {
  let component: ReadyModalComponent;
  let fixture: ComponentFixture<ReadyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
