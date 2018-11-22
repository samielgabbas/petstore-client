import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(){}

  getCurrentUser(){
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  }
}
