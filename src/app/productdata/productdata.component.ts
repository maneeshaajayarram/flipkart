import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrl: './productdata.component.scss'
})

export class ProductdataComponent implements OnInit{

  boughtproduct:any;
  
  
  constructor(
    private commonservice:CommonService,
    private cartservice: CartService){}
  
  // ngOnInit(): void {
  //   this.commonservice.getproducts().subscribe((res)=>{
  //     this.ProductsList=res;
      
  //   })
  // }
  ngOnInit(): void {
    this.commonservice.buyproduct.subscribe((data)=>{
      this.boughtproduct= data;
    })
  }
  addToCart(item:any){
    this.cartservice.addtoCart(item);
  }

  
  
    
  

}
