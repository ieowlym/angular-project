import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsSetupComponent } from './docs-setup.component';

describe('DocsSetupComponent', () => {
  let component: DocsSetupComponent;
  let fixture: ComponentFixture<DocsSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
