import {Car} from "app/model/Car";

export class SubInvoice {
	public invoicenr: string;
    public country: string; 
    public status: string;
    public month: string;
    public price: string;
    
    constructor(invoicenr: string, country: string, status: string, month:string, price:string)
    {
    	this.invoicenr = invoicenr;
    	this.country = country;
    	this.status = status;
    	this.month = month;
    	this.price = price;
    }

}