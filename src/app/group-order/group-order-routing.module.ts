import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupOrderListPage } from "./group-order-list.page";

const routes: Routes = [
  {
    path: '',
    component: GroupOrderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupOrderRoutingModule {};