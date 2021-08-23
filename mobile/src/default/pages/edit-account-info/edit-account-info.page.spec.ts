import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountInfoPage } from './edit-account-info.page';

describe('EditAccountInfoPage', () => {
  let component: EditAccountInfoPage;
  let fixture: ComponentFixture<EditAccountInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditAccountInfoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
