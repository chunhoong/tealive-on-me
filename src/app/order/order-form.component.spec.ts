import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ice, Order, Size, Sugar } from './order';
import { OrderFormComponent } from './order-form.component';

describe('OrderFormComponent - Form without data', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OrderFormComponent],
        imports: [IonicModule.forRoot(), ReactiveFormsModule]
      }).compileComponents();

      fixture = TestBed.createComponent(OrderFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should render with correct label', () => {
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
  it(
    'should render with predefined order detail',
    waitForAsync(() => {
      const order: Order = {
        drink: 'Frog bang',
        quantity: 1,
        size: Size.Medium,
        ice: Ice.Full,
        sugar: Sugar.Slight,
        toppings: []
      };

      let component: OrderFormComponent;
      let fixture: ComponentFixture<OrderFormComponent>;

      TestBed.configureTestingModule({
        declarations: [OrderFormComponent],
        imports: [IonicModule.forRoot(), ReactiveFormsModule]
      }).compileComponents();

      fixture = TestBed.createComponent(OrderFormComponent);
      component = fixture.componentInstance;
      component.order = order;
      fixture.detectChanges();

      expect(component.orderForm.value).toEqual({ ...order, toppings: '' });
    })
  );
});
