import {Car} from "app/model/Car";
import {SubInvoice} from "app/model/SubInvoice";

export class Invoice {
	public invoicenr: string;
	public date: string;
	public price: string;
    public status: string;
	public cars: Car[];
	public subinvoices: SubInvoice[];

    
    constructor(invoicenr: string, price: string, status: string)
    {
        this.invoicenr = invoicenr;
        this.price = price;
        this.status = status;
    }

}