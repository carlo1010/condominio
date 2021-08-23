import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ViewMoreProductListPage} from './view-more-product-list.page';


describe('ViewMoreProductListPage', () => {
  let component: ViewMoreProductListPage;
  let fixture: ComponentFixture<ViewMoreProductListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoreProductListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoreProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
