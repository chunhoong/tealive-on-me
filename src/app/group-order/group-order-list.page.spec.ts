import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GroupOrderApi } from '@api/group-order-api';
import { GroupOrderApiMock } from '@api/group-order-api.mock';
import { IonicModule } from '@ionic/angular';
import { GroupOrderListPage } from './group-order-list.page';
import { GroupOrderService } from './group-order.service';

describe('GroupOrderListPage', () => {
  let component: GroupOrderListPage;
  let fixture: ComponentFixture<GroupOrderListPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GroupOrderListPage],
        imports: [IonicModule.forRoot()],
        providers: [GroupOrderService, { provide: GroupOrderApi, useClass: GroupOrderApiMock }]
      }).compileComponents();

      fixture = TestBed.createComponent(GroupOrderListPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
