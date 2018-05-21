import {Car} from "app/model/Car";
import {SubInvoice} from "app/model/SubInvoice";

export class Invoice {
	public invoicenr: string;
	public month: string;
	public price: string;
    public status: string;
	public subinvoices: SubInvoice[];

    
    constructor(invoicenr: string, month: string, price: string, status: string, subinvoices: SubInvoice[])
    {
        this.invoicenr = invoicenr;
        this.month = month;
        this.price = price;
        this.status = status;
        this.subinvoices = subinvoices;
    }

}