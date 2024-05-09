import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitem:any = [];
  public productslist:any= new BehaviorSubject<any>([]);

  constructor() { }

  getproducts(){
    return this.productslist;
  }
 
 
  addtoCart(product:any){
    this.cartitem.push(product);
    this.productslist.next(this.cartitem);
     this.gettotalprice();
  }
  gettotalprice(){
    let grandtotal=0;
    this.cartitem.map((a:any)=>{
      grandtotal += a.total;
    })
    return grandtotal;
  }
  removecart(product:any){
    this.cartitem.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartitem.splice(index,1)
      }
    })
    this.productslist.next(this.cartitem)
  }
  removeallcart(){
    this.cartitem = [];
    this.productslist.next(this.cartitem);
    
  }
  buyproduct(item:any){
    this.cartitem.map((a:any, index:any)=>{
      
    })
  }

}
