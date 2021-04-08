import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, IonicModule, UserRoutingModule],
  declarations: [LoginPage],
  providers: [UserService]
})
export class UserModule {}
