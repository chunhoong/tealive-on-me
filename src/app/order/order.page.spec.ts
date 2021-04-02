import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OrderApi } from '@api/order-api';
import { OrderApiMock } from '@api/order-api.mock';
import { IonicModule } from '@ionic/angular';
import { OrderPage } from './order.page';
import { OrderService } from './order.service';

describe('OrderPage', () => {
  let component: OrderPage;
  let fixture: ComponentFixture<OrderPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OrderPage],
        imports: [IonicModule.forRoot()],
        providers: [OrderService, { provide: OrderApi, useClass: OrderApiMock }]
      }).compileComponents();

      fixture = TestBed.createComponent(OrderPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
