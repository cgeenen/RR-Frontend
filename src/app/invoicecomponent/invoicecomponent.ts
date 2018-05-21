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
  selector: 'invoice-comp',
  templateUrl: '../invoicecomponent/invoicecomponent.html',
  styleUrls: ['../invoicecomponent/invoicecomponent.css']
})
export class InvoiceComponent implements OnInit{

	// Has to be invoices array because an invoice is now a subinvoice. 
	invoice: Invoice;
	month: string;

	constructor(private service: StartService , private route: ActivatedRoute, private router: Router) { }

	ngOnInit(){
		this.route.params.subscribe(params => { this.month = params["month"]; this.service.getInvoice(this.month).subscribe(p=> this.invoice = p); })
	}
}