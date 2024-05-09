import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-itemnotfound',
  templateUrl: './itemnotfound.component.html',
  styleUrl: './itemnotfound.component.scss'
})
export class ItemnotfoundComponent implements OnInit{
 public searchtext:any
 constructor( private commonservice: CommonService){}

 ngOnInit(): void {
   this.commonservice.searchedtext.subscribe((d)=>{
    this.searchtext=d
   })
 }

}
