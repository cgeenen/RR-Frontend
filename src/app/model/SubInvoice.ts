import {Car} from "app/model/Car";

export class SubInvoice {
	public invoicenr: string;
    public country: string; 
    public paymentstatus: string;
    public invoicedate: string;
    public price: string;
    
    constructor(invoicenr: string, country: string, paymentstatus: string, invoicedate:string, price:string)
    {
    	this.invoicenr = invoicenr;
    	this.country = country;
    	this.paymentstatus = paymentstatus;
    	this.invoicedate = invoicedate;
    	this.price = price;
    }

}