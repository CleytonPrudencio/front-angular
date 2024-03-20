import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {InicialComponent} from "./inicial/inicial.component";
import {InicialService} from "./inicial/inicial.service";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ InicialService,LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
