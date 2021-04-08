import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ice, Order, Size, Sugar } from './order';
import { OrderFormComponent } from './order-form.component';

let component: OrderFormComponent;
let fixture: ComponentFixture<OrderFormComponent>;

describe('OrderFormComponent - Form without data', () => {
  beforeEach(waitForAsync(renderWith({ order: undefined })));

  it('should create with correct label', () => {
    const label = 'Order';
    component.buttonLabel = label;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('#submit').textContent).toEqual(label);
  });

  it('should trigger submit event on submission', () => {
    spyOn(component.submit, 'emit');
    component.handleSubmit();
    fixture.detectChanges();
    expect(component.submit.emit).toHaveBeenCalled();
  });
});

describe('OrderFormComponent - Form with existing data', () => {
  const order: Order = {
    drink: 'Frog bang',
    quantity: 1,
    size: Size.Medium,
    ice: Ice.Full,
    sugar: Sugar.Slight,
    toppings: []
  };

  beforeEach(waitForAsync(renderWith({ order })));

  it('should create with predefined order detail', () => {
    expect(component.orderForm.value).toEqual({ ...order, toppings: '' });
  });
});

function renderWith({ order }) {
  return () => {
    TestBed.configureTestingModule({
      declarations: [OrderFormComponent],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    component.order = order;
    fixture.detectChanges();
  };
}
