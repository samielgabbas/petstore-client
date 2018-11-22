import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./order/order.component";
import {StoreComponent} from "./store/store.component";
import {LoginComponent} from "./login/login.component";
import {AuthGard} from "./guards/auth-guard";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'home', canActivateChild: [AuthGard], component: HomeComponent,
    children: [
      {path: 'orders', component: OrderComponent},
      {path: 'store', component: StoreComponent}
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard]
})
export class AppRoutingModule {

}
