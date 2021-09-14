import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtestComponent } from './ctest.component';

describe('CtestComponent', () => {
  let component: CtestComponent;
  let fixture: ComponentFixture<CtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
