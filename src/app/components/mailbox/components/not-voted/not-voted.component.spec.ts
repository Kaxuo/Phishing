import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotVotedComponent } from './not-voted.component';

describe('NotVotedComponent', () => {
  let component: NotVotedComponent;
  let fixture: ComponentFixture<NotVotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotVotedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotVotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
