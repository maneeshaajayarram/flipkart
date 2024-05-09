import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { LoginComponent } from './signup/login/login.component';
import { RegisterComponent } from './signup/register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ItemnotfoundComponent } from './itemnotfound/itemnotfound.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent,pathMatch:'full' },
  {path: 'frontpage', component:FrontpageComponent},
  { path: 'products' ,component: ProductsComponent},
  { path: 'pagenotfound', component:PagenotfoundComponent},
  { path: 'cart' ,component: CartpageComponent },
  { path: 'products/:id' ,component: ProductdataComponent },
  { path: 'login',component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'itemnotfound', component:ItemnotfoundComponent  },
  { path:'**' ,redirectTo:'/pagenotfound', pathMatch:'full'}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
