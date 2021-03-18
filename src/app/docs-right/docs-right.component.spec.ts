import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsRightComponent } from './docs-right.component';

describe('DocsRightComponent', () => {
  let component: DocsRightComponent;
  let fixture: ComponentFixture<DocsRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
