import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { AuthService } from "app/authcomponent/authservice";
import { Router, ActivatedRoute, Params} from '@angular/router';
import {Http,Response} from '@angular/http';
import { ISubscription } from "rxjs/Subscription";
import {User} from "app/model/User";
import { NgForm } from '@angular/forms';
import {Invoice} from "app/model/Invoice";
 
@Component({
  selector: 'auth-comp',
  templateUrl: '../authcomponent/authcomponent.html',
  styleUrls: ['../authcomponent/authcomponent.css']
})
export class AuthComponent implements OnInit{

  testinvoice: Invoice;

  constructor(private service:AuthService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(){
    this.testinvoice = new Invoice("1");
  }

  onLogin(form: NgForm) {

  		this.service.Login(form.value.username, form.value.password).subscribe((res: Response) => { localStorage.setItem("jwt", res.headers.get("jwt")); localStorage.setItem("user", res.text()); this.router.navigate(['home']) });
  
  }

}