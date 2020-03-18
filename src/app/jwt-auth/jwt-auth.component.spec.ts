import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtAuthComponent } from './jwt-auth.component';

describe('JwtAuthComponent', () => {
  let component: JwtAuthComponent;
  let fixture: ComponentFixture<JwtAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
