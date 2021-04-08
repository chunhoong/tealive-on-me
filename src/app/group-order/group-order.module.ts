import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ApiModule } from '@api/api.module';
import { IonicModule } from '@ionic/angular';
import { GroupOrderComponent } from './group-order.component';
import { GroupOrderService } from './group-order.service';

@NgModule({
  declarations: [GroupOrderComponent],
  imports: [CommonModule, IonicModule, ApiModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GroupOrderService]
})
export class GroupOrderModule {}
