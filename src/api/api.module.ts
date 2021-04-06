import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from 'environments/environment';
import { GroupOrderApi } from './group-order-api';
import { GroupOrderApiImpl } from './group-order-api.impl';
import { GroupOrderApiMock } from './group-order-api.mock';
import { OrderApi } from './order-api';
import { OrderApiImpl } from './order-api.impl';
import { OrderApiMock } from './order-api.mock';
import { UserApi } from './user-api';
import { UserApiImpl } from './user-api.impl';
import { UserApiMock } from './user-api.mock';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: GroupOrderApi, useClass: environment.mock ? GroupOrderApiMock : GroupOrderApiImpl },
    { provide: OrderApi, useClass: environment.mock ? OrderApiMock : OrderApiImpl },
    { provide: UserApi, useClass: environment.mock ? UserApiMock : UserApiImpl }
  ]
})
export class ApiModule {}
