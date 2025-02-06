import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Video2Page } from './video2.page';

describe('Video2Page', () => {
  let component: Video2Page;
  let fixture: ComponentFixture<Video2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Video2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
