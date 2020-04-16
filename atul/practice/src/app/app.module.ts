import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data1/data1.component';
import { Server1Component } from './data2/data2.component';
import { from } from 'rxjs';
import { Data3Component } from './data3/data3.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    Server1Component,
    Data3Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
