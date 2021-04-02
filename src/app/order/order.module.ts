import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from '@api/api.module';
import { IonicModule } from '@ionic/angular';
import { OrderFormComponent } from './order-form.component';
import { OrderPageRoutingModule } from './order-routing.module';
import { OrderPage } from './order.page';
import { OrderService } from './order.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, OrderPageRoutingModule, ApiModule],
  declarations: [OrderPage, OrderFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [OrderService]
})
export class OrderModule {}
