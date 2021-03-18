import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsLeftComponent } from './docs-left.component';

describe('DocsLeftComponent', () => {
  let component: DocsLeftComponent;
  let fixture: ComponentFixture<DocsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
