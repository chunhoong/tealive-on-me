import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OrderApi } from '@api/order-api';
import { OrderApiMock } from '@api/order-api.mock';
import { IonicModule } from '@ionic/angular';
import { OrderCreationPage } from './order-creation.page';
import { OrderService } from './order.service';

describe('OrderCreationPage', () => {
  let component: OrderCreationPage;
  let fixture: ComponentFixture<OrderCreationPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OrderCreationPage],
        imports: [IonicModule.forRoot()],
        providers: [OrderService, { provide: OrderApi, useClass: OrderApiMock }]
      }).compileComponents();

      fixture = TestBed.createComponent(OrderCreationPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
