import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MortgageFormComponent } from './mortgage-form/mortgage-form.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MortgageBreakUpComponent } from './mortgage-break-up/mortgage-break-up.component';
import { MortgageAmortizationComponent } from './mortgage-amortization/mortgage-amortization.component';
import { MortgageRateComponent } from './mortgage-rate/mortgage-rate.component';


@NgModule({
  declarations: [
    AppComponent,
    MortgageFormComponent,
    MortgageBreakUpComponent,
    MortgageAmortizationComponent,
    MortgageRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
