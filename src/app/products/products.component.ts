import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CartService } from '../../services/cart.service';
import { waitForDebugger } from 'inspector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  public ProductsList: any;
  public menlist:any;
  searchtext:any='';
  filtersearch:any='';
  constructor(
    private commonservice: CommonService,
    private cartservice: CartService,
    private router :Router
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.commonservice.getproducts().subscribe((res: any) => {
      this.ProductsList = res;
      this.ProductsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
   
    // about searching for products
    this.commonservice.searchedtext.subscribe((searchtext:any)=>{
    this.searchtext=searchtext;
     })
    
   
  }
  getjwellery() {
    this.commonservice.getjwellery().subscribe((data: any) => {
      this.ProductsList = data;
      this.ProductsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  getmen(){
    this.commonservice.getmen().subscribe((res)=>{
      this.ProductsList= res;
      this.ProductsList= this.ProductsList.data;
      this.ProductsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })
  }
  getwomen(){
    this.commonservice.getwomen().subscribe((res)=>{
      this.ProductsList= res;
      this.ProductsList= this.ProductsList.data;
      this.ProductsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })
  }
  getelectronics(){
    this.commonservice.getelectronics().subscribe((res)=>{
      this.ProductsList= res;
      this.ProductsList= this.ProductsList.data;
      this.ProductsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })
  }
  getallproducts(){
    this.commonservice.getproducts().subscribe((res: any) => {
      this.ProductsList = res;
      this.ProductsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  addtocart(item: any) {
    this.cartservice.addtoCart(item);
  }
  buyproducts(item:any){
    this.commonservice.buyproduct.next(item);
  }


}
