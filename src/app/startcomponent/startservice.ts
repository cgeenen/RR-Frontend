import {Injectable} from '@angular/core';
import {Http,Response,URLSearchParams,RequestOptions, Headers} from '@angular/http';
import {User} from "app/model/User";
import {Car} from "app/model/Car";
import {Invoice} from "app/model/Invoice";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StartService {

   constructor(private http: Http) {
   }

  getUser(): Observable<User> {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("jwt"));

        let requestOptions = new RequestOptions();
        requestOptions.headers = headers;

        // Write only user, only with accessible with token.
        // Get user with invoices + cars. They should be clickable in a listbox.
        // The invoice should only consist of basic values where in no subinvoices are sent, they are not needed yet. 
        return this.http.get('http://localhost:8080/RR_RekeningRijder/protected/main/user', requestOptions).map((res: Response) => <User>res.json());
    }

    getInvoice(invoicenumber: string): Observable<Invoice[]> {
    	const headers: Headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("jwt"));

        let requestOptions = new RequestOptions();
        requestOptions.headers = headers;

        // Here we get the invoice with all the subinvoices.
        return this.http.get('http://localhost:8080/RR_RekeningRijder/protected/protected/main/invoices/1', requestOptions).map((res: Response) => <Invoice[]>res.json());
    }

    getAllInvoices(): Observable<Invoice[]> {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("jwt"));

        let requestOptions = new RequestOptions();
        requestOptions.headers = headers;

        // Write only user, only with accessible with token.
        // Get user with invoices + cars. They should be clickable in a listbox.
        // The invoice should only consist of basic values where in no subinvoices are sent, they are not needed yet. 
        return this.http.get('http://localhost:8080/RR_RekeningRijder/protected/main/invoices', requestOptions).map((res: Response) => <Invoice[]>res.json());
    }

    getAllCars(): Observable<Car[]> {
        const headers: Headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("jwt"));

        let requestOptions = new RequestOptions();
        requestOptions.headers = headers;

        // Write only user, only with accessible with token.
        // Get user with invoices + cars. They should be clickable in a listbox.
        // The invoice should only consist of basic values where in no subinvoices are sent, they are not needed yet. 
        return this.http.get('http://localhost:8080/RR_RekeningRijder/protected/main/vehicles', requestOptions).map((res: Response) => <Car[]>res.json());
    }

}