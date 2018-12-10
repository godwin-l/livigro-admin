import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AutoCompleteModule } from 'ng5-auto-complete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';
import {DataTableModule} from "angular-6-datatable";
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { PackageComponent } from './package/listpackage/listpackage.component';
import { ViewpackageComponent } from './package/viewpackage/viewpackage.component';
import { MybookingsComponent } from './user/mybookings/mybookings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    PackageComponent,
    ViewpackageComponent,
    MybookingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    DataTableModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    DataTablesModule,
    AutoCompleteModule,
    NgbModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }