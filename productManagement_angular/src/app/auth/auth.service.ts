import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLogin:any = true;
baseUrl:string= 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }
// user login interface,object: {username,password}
login(obj){
  return this.http.post(`${this.baseUrl}/login`,obj);
}





// user register interface
register(obj){
  return this.http.post(`${this.baseUrl}/register`,obj);
}

  // login(username:string,password:string):boolean{
  //     if(('jack' == username) && ('123456'==password)){
  //       this.isLogin = true;
  //       sessionStorage.setItem('status',this.isLogin);
  //       return true;
  //     }
  //     else{
       
  //       return false;
  //     }
  // }
  // logout(){
  //   this.isLogin = false;
  //   sessionStorage.removeItem('status');
  // }


}

