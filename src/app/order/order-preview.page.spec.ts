import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderApi } from '@api/order-api';
import { OrderApiMock } from '@api/order-api.mock';
import { IonicModule } from '@ionic/angular';
import { OrderPreviewPage } from './order-preview.page';
import { OrderService } from './order.service';

let component: OrderPreviewPage;
let fixture: ComponentFixture<OrderPreviewPage>;

describe('OrderPreviewPage - With right to edit', () => {
  beforeEach(waitForAsync(renderWith({ hasRightToEdit: true })));

  it('should create with existing order', () => {
    expect(component).toBeTruthy();
    expect(component.order).toBeDefined();
  });

  it('should create with button', () => {
    expect(component.buttonLabel).toBe('Update order');
  });
});

describe('OrderPreviewPage - Without right to edit', () => {
  beforeEach(waitForAsync(renderWith({ hasRightToEdit: false })));

  it('should create without button', () => {
    expect(component.buttonLabel).toBe('');
  });
});

function renderWith({ hasRightToEdit }) {
  return () => {
    TestBed.configureTestingModule({
      declarations: [OrderPreviewPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [OrderService, { provide: OrderApi, useClass: OrderApiMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderPreviewPage);
    component = fixture.componentInstance;
    spyOn(component, 'hasRightToEdit').and.returnValue(hasRightToEdit);
    fixture.detectChanges();
  };
}
