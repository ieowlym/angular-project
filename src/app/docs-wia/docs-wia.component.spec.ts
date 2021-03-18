import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsWiaComponent } from './docs-wia.component';

describe('DocsWiaComponent', () => {
  let component: DocsWiaComponent;
  let fixture: ComponentFixture<DocsWiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsWiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsWiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
