import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  public buyproduct= new BehaviorSubject<any>({});
  public addcart= new BehaviorSubject<any>({});

  constructor(private http:HttpClient) { }
  getproducts(){
    return this.http.get<any>("http://fakestoreapi.com/products")
    .pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
  getjwellery(){
    return this.http.get('https://fakestoreapi.com/products/category/jewelery')
  }
  getmen(){
    return this.http.get('../assets/men.json');
  }
  getwomen(){
    return this.http.get('../assets/women.json');
  }
  getelectronics(){
    return this.http.get('../assets/electronics.json');
  }

  public searchedtext= new Subject();
  
  


}

