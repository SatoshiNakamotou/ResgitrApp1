import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAlternativoPage } from './login-alternativo.page';

describe('LoginAlternativoPage', () => {
  let component: LoginAlternativoPage;
  let fixture: ComponentFixture<LoginAlternativoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginAlternativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
