import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = JSON.parse(localStorage.getItem('user'));
    if(user){
      req = req.clone({ headers: req.headers.set('Authorization', 'Basic ' + user.authToken) });
    }
    return next.handle(req);
  }
}
