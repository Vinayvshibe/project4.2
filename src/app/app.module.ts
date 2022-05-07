import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FoodComponent } from './food/food.component';

import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AdminfoodComponent } from './adminfood/adminfood.component';
import { AllproductComponent } from './foodforadmin/allproduct/allproduct.component';
import { CreateproductComponent } from './foodforadmin/createproduct/createproduct.component';
import { NameproductComponent } from './foodforadmin/nameproduct/nameproduct.component';
import { DeleteproductComponent } from './foodforadmin/deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './foodforadmin/updateproduct/updateproduct.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FoodComponent,
    WelcomeadminComponent,
    ChangepasswordComponent,
    AdminfoodComponent,
    AllproductComponent,
    CreateproductComponent,
    NameproductComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    OrdernowComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
