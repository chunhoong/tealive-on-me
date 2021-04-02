import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ice, Order, Size, Sugar } from './order';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @Input() order: Order;
  @Input() buttonLabel: string;
  @Output() submit = new EventEmitter<Order>();
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      drink: [this.order?.drink ?? '', Validators.required],
      quantity: [this.order?.quantity ?? 1, Validators.required],
      size: [this.order?.size ?? Size.Small, Validators.required],
      ice: [this.order?.ice ?? Ice.Full, Validators.required],
      sugar: [this.order?.sugar ?? Sugar.Full, Validators.required],
      toppings: [this.order?.toppings.join(', ') ?? '']
    });
  }

  handleSubmit() {
    this.submit.emit(this.orderForm.value);
  }
}
