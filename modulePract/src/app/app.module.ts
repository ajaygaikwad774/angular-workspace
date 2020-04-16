import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CompanyModule } from "./company/company.module";
import { EmployeeComponent } from "./employee/employee/employee.component";
import { MyserviceService } from "./myservice.service";

@NgModule({
  declarations: [AppComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, CompanyModule],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
