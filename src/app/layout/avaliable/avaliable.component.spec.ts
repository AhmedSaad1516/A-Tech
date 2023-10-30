import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableComponent } from './avaliable.component';

describe('AvaliableComponent', () => {
  let component: AvaliableComponent;
  let fixture: ComponentFixture<AvaliableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliableComponent]
    });
    fixture = TestBed.createComponent(AvaliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
