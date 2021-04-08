import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserApi } from '@api/user-api';
import { UserApiMock } from '@api/user-api.mock';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { UserService } from './user.service';

describe('LoginComponent', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule],
        providers: [UserService, { provide: UserApi, useClass: UserApiMock }]
      }).compileComponents();

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
