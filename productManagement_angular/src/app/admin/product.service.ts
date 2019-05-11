import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Product} from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient ) { }
BaseUrl:string = "http://localhost:3000/products";
//Get all product list
getProduct(){
  return this.http.get(this.BaseUrl);
}
//Get product by id
getProductById(id){
  return this.http.get(this.BaseUrl+"/"+id);
}
//Post
addProduct(obj){
  return this.http.post(this.BaseUrl,obj);
}
//Put
editProduct(id,obj){
  return this.http.put(this.BaseUrl+"/"+id,obj);
}
//Delete
deleteProduct(id){
  return this.http.delete(this.BaseUrl+"/"+id);
}

}
