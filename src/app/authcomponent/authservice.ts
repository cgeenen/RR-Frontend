import {Injectable} from '@angular/core';
import {Http,Response,URLSearchParams,RequestOptions, Headers } from '@angular/http';
import {User} from "app/model/User";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  user: User;

   constructor(private http: Http) {
   }

   Login(username: string, password: string): Observable<any> {

        let params: URLSearchParams = new URLSearchParams();

        params.set('username', username);
        params.set('password', password);
        let requestOptions = new RequestOptions();
        requestOptions.search = params;

        // Response terug met de username in de body en een JWT token in de header.
   		return this.http.get('http://localhost:8080/RR_RekeningRijder/api/login/', requestOptions).map((res: Response) => res);

   		// Also redirect to the user with this username afterwards if succesful,
   		// Set token for the user.
   }

   Logout(): Observable<any> {
		  const headers: Headers = new Headers();
		  headers.append('Authorization', 'Bearer ' + localStorage.getItem("jwt"));
		  const requestOptions: RequestOptions = new RequestOptions();
		  requestOptions.headers = headers;

		  localStorage.clear();
   		// Set headers for auth
   		return this.http.get('http://localhost:8080/RR_RekeningRijder/protected/main/user/logout', requestOptions).map((res: Response) => res ) ;
   		//this.http.get('http://localhost:8080/KwetterApplicatie/api/main/user/logout').map((res: Response) => { console.log(res.text()); if(res.text() == "Logged out") { localStorage.clear(); } });
   }
 }
