import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {Order} from "../model/order";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Pet} from "../model/pet";
import {tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class OrderService{

  private ordersUrl = environment.apiUrl + 'order';
  private orders: Order[];

  constructor(private http : HttpClient){}

  orderPet(pet: Pet, quantity: number): Observable<Order>{
    return this.http.post<Order>(`${this.ordersUrl}/${pet.id}/${quantity}`, null);
  }

  getOrders() :Observable<Order[]>{
    return this.http.get<Order[]>(this.ordersUrl)
      .pipe(
        tap(
          orders => {
            this.orders = orders;
          }
        )
      );
  }

  delete(order: Order) : Observable<Order>{
    return this.http
      .delete<Order>(this.ordersUrl + '/' + order.id)
      .pipe(
        tap(
          _ => {
            this.orders.splice(this.orders.findIndex(o => o==order),1);
          },
          (err) => {
            if(err.status == 403)
              alert(`Error : You don't have the privilege to perform this action`)
          }
        )
      );
  }
}
