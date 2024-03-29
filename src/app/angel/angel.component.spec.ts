import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelComponent } from './angel.component';

describe('AngelComponent', () => {
  let component: AngelComponent;
  let fixture: ComponentFixture<AngelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
