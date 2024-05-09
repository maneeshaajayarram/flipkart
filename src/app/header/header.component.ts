import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute,Router } from '@angular/router';
import { filter, find, map } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public totalitem=0;
  public productslist:any
  constructor(
    private cartservice:CartService,
    private commonservice: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }

 ngOnInit(): void {
   this.cartservice.getproducts()
   .subscribe((res:any)=>{
    this.totalitem=res.length;
   })
   this.commonservice.getproducts().subscribe((d:any)=>{
    this.productslist=d
   })
 }

 searchtext:any='';

 sentSearchText(){
  this.commonservice.searchedtext.next(this.searchtext);
  let user=this.productslist.filter((a:any)=>{
        if(a.title.toLowerCase().includes(this.searchtext.toLowerCase()))
          {
            return true
          }
        else{
          return false
        }
   })

  if(user.length==0){
    this.router.navigate(['/itemnotfound'])
  }  
 }
//  clear(){
//   this.searchtext='';
//  this.router.navigateByUrl('/products')

 
 

}
