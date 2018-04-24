import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'app/authcomponent/authcomponent';
import { AuthService } from 'app/authcomponent/authservice';
import { StartComponent } from 'app/startcomponent/startcomponent';
import { StartService } from 'app/startcomponent/startservice';
import { InvoiceComponent } from 'app/invoicecomponent/invoicecomponent';
import { VehicleComponent } from 'app/vehiclecomponent/vehiclecomponent';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '',                      redirectTo: 'login',        pathMatch: 'full'},
  { path: 'login',                                             component: AuthComponent},
  { path: 'home',                                              component: StartComponent},
  { path: 'home/invoice/:month',                               component: InvoiceComponent},
  { path: 'home/vehicle/:licensenr',                           component: VehicleComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AuthComponent,
    InvoiceComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, StartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
