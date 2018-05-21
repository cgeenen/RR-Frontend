import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {Http,Response} from '@angular/http';
import { ISubscription } from "rxjs/Subscription";
import {User} from "app/model/User";
import { StartService } from 'app/startcomponent/startservice';
import { NgForm } from '@angular/forms';
import {Car} from "app/model/Car";
import {Invoice} from "app/model/Invoice";
 
@Component({
  selector: 'start-comp',
  templateUrl: '../startcomponent/startcomponent.html',
  styleUrls: ['../startcomponent/startcomponent.css']
})
export class StartComponent implements OnInit{

  testcar: Car;
  testinvoice: Invoice;

  invoices: Invoice[];
  cars: Car[];
  user: User;
  trending: string[];
  tweets: string[];

  	constructor(private service: StartService , private route: ActivatedRoute, private router: Router) { }

  
	ngOnInit(){
	  	if(localStorage.getItem("user")) {
        console.log(localStorage.getItem("user"));
	  		// First test if the constructor with optional values work so its not giving all the subinvoices to the first loaded list:
	  		// this.testcar = new Car("dd-xx-ww", "yaris");
	  		// this.testinvoice = new Invoice("1");
	  		this.service.getAllInvoices().subscribe(p=> this.invoices = p);
        this.service.getAllCars().subscribe(p=> this.cars = p);
		}
	}

  }

