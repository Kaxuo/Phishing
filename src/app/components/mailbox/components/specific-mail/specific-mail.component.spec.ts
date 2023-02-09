import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificMailComponent } from './specific-mail.component';

describe('SpecificMailComponent', () => {
  let component: SpecificMailComponent;
  let fixture: ComponentFixture<SpecificMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
