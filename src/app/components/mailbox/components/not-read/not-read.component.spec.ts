import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotReadComponent } from './not-read.component';

describe('NotReadComponent', () => {
  let component: NotReadComponent;
  let fixture: ComponentFixture<NotReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
