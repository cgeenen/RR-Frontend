import {Invoice} from "app/model/Invoice";
import {Car} from "app/model/Car";

export class User {
    public username: string;
    public invoices: Invoice[];
    public cars: Car[];
    
    constructor(username: string, invoices: Invoice[], cars: Car[])
    {
        this.username = username;
        this.invoices = invoices;
        this.cars = cars;
    }

}
