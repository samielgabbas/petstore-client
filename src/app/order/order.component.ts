import {Component, OnInit} from '@angular/core';
import {Order} from "../model/order";
import {OrderService} from "../services/order.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[];
  selectedOrder;

  constructor(private orderService: OrderService, private userService: UserService) {
  }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(data => {
          this.orders = data;
        }
      );
  }

  onSelect(order: Order) {
    this.selectedOrder = order;
  }

  delete(order: Order) {
    if (confirm("Are you sure to delete this order")) {
      this.orderService.delete(order).subscribe();
    }
  }

  canDelete() {
    const currentUser: any = this.userService.getCurrentUser();
    return currentUser &&
      currentUser.authorities.findIndex(u => u.authority === 'ROLE_ADMIN') >= 0;
  }

}
