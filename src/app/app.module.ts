import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CommonService } from '../services/common.service';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { LoginComponent } from './signup/login/login.component';
import { RegisterComponent } from './signup/register/register.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ItemnotfoundComponent } from './itemnotfound/itemnotfound.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartpageComponent,
    ProductdataComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    ItemnotfoundComponent,
    FrontpageComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
  ],
  providers: [
    provideClientHydration(),
    CommonService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
