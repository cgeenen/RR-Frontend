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
  selector: 'vehicle-comp',
  templateUrl: '../vehiclecomponent/vehiclecomponent.html',
  styleUrls: ['../vehiclecomponent/vehiclecomponent.css']
})
export class VehicleComponent implements OnInit{

	vehicle: Car;
	licensenr: string;

	constructor(private service: StartService , private route: ActivatedRoute, private router: Router) { }

	ngOnInit(){
		this.route.params.subscribe(params => { this.licensenr = params["licensenr"]; this.service.getVehicle(this.licensenr).subscribe(p=> this.vehicle = p); })
	}

	onEditVehicle(form: NgForm) {
		this.service.editVehicle(form.value.licensenr, form.value.type).subscribe(p => this.vehicle = p);
	}
}