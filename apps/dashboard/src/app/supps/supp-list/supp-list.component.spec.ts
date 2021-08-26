import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppListComponent } from './supp-list.component';

describe('SuppListComponent', () => {
  let component: SuppListComponent;
  let fixture: ComponentFixture<SuppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
