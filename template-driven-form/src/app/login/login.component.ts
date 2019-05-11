import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor() {
      this.user = new User();
   }

  ngOnInit() {
    // this.user.email="hello email"
  }
  onSubmit(){
    console.log("the submitted data is ", this.user);
  }
}
