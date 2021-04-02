import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from '@api/api.module';
import { GroupOrderService } from './group-order.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, ApiModule],
  providers: [GroupOrderService]
})
export class GroupOrderModule {}
