import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetryPage } from './retry.page';

describe('RetryPage', () => {
  let component: RetryPage;
  let fixture: ComponentFixture<RetryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RetryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
