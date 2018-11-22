import { Component, OnInit } from '@angular/core';
import {RequestOptions} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }

  public logIn(){

    let token = btoa(`${this.username}:${this.password}`);

    const headers = new HttpHeaders({ Authorization: 'Basic ' + token });

     this.http.get(environment.apiUrl + "login" , {headers })
      .subscribe((response:any) => {
        if (response) {
          response.principal.authToken = token;
          localStorage.setItem('user', JSON.stringify(response.principal));
          this.router.navigate(['home/store']);
        }
      }, (err) => {
        alert("error " + JSON.stringify(err));
      });
  }
}
