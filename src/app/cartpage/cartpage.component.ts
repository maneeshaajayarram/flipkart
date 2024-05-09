import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.scss'
})
export class CartpageComponent implements OnInit {
  
  public product:any = [];
  public grandtotal :any;
  public addcart:any;
  
  constructor(
    private cartservice :CartService,
    private commonservice:CommonService
    ){}
   
    ngOnInit(): void {
     this.cartservice.getproducts()
     .subscribe((res:any)=>{
       this.product = res;
       this.grandtotal=this.cartservice.gettotalprice();
      });
      // this.commonservice.addcart.subscribe((res)=>{
      //   this.addcart= res;
      // })
      
    }
    removeItem(item:any){
      this.cartservice.removecart(item);
    }
    emptyCart(){
      this.cartservice.removeallcart();
    }

    
}
