import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { GroupOrder } from './group-order';

import { GroupOrderComponent } from './group-order.component';

describe('GroupOrderComponent', () => {
  let component: GroupOrderComponent;
  let fixture: ComponentFixture<GroupOrderComponent>;
  const groupOrder: GroupOrder = {
    id: '12345',
    username: 'chunhoong',
    isAvailable: true,
    createdAt: '',
    isTreat: true
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupOrderComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupOrderComponent);
    component = fixture.componentInstance;
    component.groupOrder = groupOrder;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.groupOrder).toEqual(groupOrder);
  });
});
