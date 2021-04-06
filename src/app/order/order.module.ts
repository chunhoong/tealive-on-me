import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from '@api/api.module';
import { IonicModule } from '@ionic/angular';
import { OrderCreationPage } from './order-creation.page';
import { OrderFormComponent } from './order-form.component';
import { OrderPreviewPage } from './order-preview.page';
import { OrderPageRoutingModule } from './order-routing.module';
import { OrderService } from './order.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, OrderPageRoutingModule, ApiModule],
  declarations: [OrderCreationPage, OrderPreviewPage, OrderFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [OrderService]
})
export class OrderModule {}
