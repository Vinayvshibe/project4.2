import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminfoodComponent } from './adminfood/adminfood.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FoodComponent } from './food/food.component';
import { AllproductComponent } from './foodforadmin/allproduct/allproduct.component';
import { CreateproductComponent } from './foodforadmin/createproduct/createproduct.component';
import { DeleteproductComponent } from './foodforadmin/deleteproduct/deleteproduct.component';
import { NameproductComponent } from './foodforadmin/nameproduct/nameproduct.component';
import { UpdateproductComponent } from './foodforadmin/updateproduct/updateproduct.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { PaymentComponent } from './payment/payment.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';

const routes: Routes = [
  {path: 'admin', component:AdminComponent},
  {path: 'food', component:FoodComponent},
  {path: 'welcomeadmin', component:WelcomeadminComponent},
  {path: 'changepassword', component:ChangepasswordComponent},
  {path: 'adminfood', component:AdminfoodComponent},
  {path:'createproduct', component:CreateproductComponent},
  {path:'allproduct', component:AllproductComponent},
  {path:'nameproduct', component:NameproductComponent},
  {path:'deleteproduct', component:DeleteproductComponent},
  {path:'updateproduct', component:UpdateproductComponent},
  {path:'ordernow', component:OrdernowComponent},
  {path:'payment', component:PaymentComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
