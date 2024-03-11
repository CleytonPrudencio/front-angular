import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SPTRANSComponent} from "./sptrans/sptrans.component";
import {SptransService} from "./sptrans.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SPTRANSComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ SptransService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
