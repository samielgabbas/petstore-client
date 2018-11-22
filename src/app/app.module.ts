import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetService } from "src/app/services/pet.service";
import { OrderComponent } from './order/order.component';
import {AppRoutingModule} from "./app-routing.module";
import { StoreComponent } from './store/store.component';
import {OrderService} from "./services/order.service";
import { LoginComponent } from './login/login.component';
import {AuthGard} from "./guards/auth-guard";
import {AuthInterceptor} from "./services/auth-interceptor";
import { HomeComponent } from './home/home.component';
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetDetailComponent,
    PetAddComponent,
    OrderComponent,
    StoreComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PetService,
    OrderService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
