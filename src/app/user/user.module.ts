import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, IonicModule, UserRoutingModule, ReactiveFormsModule],
  declarations: [LoginPage],
  providers: [UserService]
})
export class UserModule {}
