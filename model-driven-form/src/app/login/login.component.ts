import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        username : new FormControl(),
        email : new FormControl(),
        password : new FormControl("",[
          Validators.required,
          Validators.minLength(8)
        ])
      }
    );
  }
  onSubmit(){
    if(this.myForm.valid){
      console.log("the submitted data is =",this.myForm.value);
    }
    
  }

}
