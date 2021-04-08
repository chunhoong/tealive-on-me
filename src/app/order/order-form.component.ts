import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ice, Order, Size, Sugar } from './order';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() order: Order;
  @Input() buttonLabel: string;
  @Output() submit = new EventEmitter<Order>();
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      drink: [{ value: this.order?.drink ?? '', disabled: this.disabled }, Validators.required],
      quantity: [{ value: this.order?.quantity ?? 1, disabled: this.disabled }, Validators.required],
      size: [{ value: this.order?.size ?? Size.Small, disabled: this.disabled }, Validators.required],
      ice: [{ value: this.order?.ice ?? Ice.Full, disabled: this.disabled }, Validators.required],
      sugar: [{ value: this.order?.sugar ?? Sugar.Full, disabled: this.disabled }, Validators.required],
      toppings: [{ value: this.order?.toppings.join(', ') ?? '', disabled: this.disabled }]
    });
  }

  handleSubmit() {
    this.submit.emit(this.orderForm.value);
  }
}
