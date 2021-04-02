import { TestBed } from '@angular/core/testing';
import { OrderApi } from '@api/order-api';
import { OrderApiMock } from '@api/order-api.mock';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [{ provide: OrderApi, useClass: OrderApiMock }, OrderService] });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
