import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMComponent } from './page-m.component';

describe('PageMComponent', () => {
  let component: PageMComponent;
  let fixture: ComponentFixture<PageMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
