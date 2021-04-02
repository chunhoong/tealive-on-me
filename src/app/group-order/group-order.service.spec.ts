import { TestBed } from '@angular/core/testing';
import { GroupOrderApi } from '@api/group-order-api';
import { GroupOrderApiMock } from '@api/group-order-api.mock';
import { GroupOrderService } from './group-order.service';

describe('GroupOrderService', () => {
  let service: GroupOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [{ provide: GroupOrderApi, useClass: GroupOrderApiMock }, GroupOrderService] });
    service = TestBed.inject(GroupOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
