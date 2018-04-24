import {Car} from "app/model/Car";
import {SubInvoice} from "app/model/SubInvoice";

export class Invoice {
	public invoicenr: string;
	public month: string;
	public price: string;
    public status: string;
	public cars: Car[];
	public subinvoices: SubInvoice[];

    
    constructor(price: string, month: string)
    {
        this.price = price;
        this.month = month;
    }

}