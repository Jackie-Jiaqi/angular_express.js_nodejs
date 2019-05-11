import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  forbiddenName = ['jason','susan'];
  validateForm: FormGroup;
  constructor(private authService :AuthService,private router:Router) {
      
   }

  ngOnInit() {
    // this.user.email="hello email"
    this.validateForm = new FormGroup(
      {
        Username: new FormControl('',[Validators.required,this.forbiddenNameValidator.bind(this)]),
        email: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern("[^@]+@[^@]+")]),
        password: new FormControl('',[Validators.required]),
        checkPassword: new FormControl('',[Validators.required,this.confirmationValidator.bind(this)])
    }
    );
  }
  onSubmit(){
    // console.log("the submitted data is ", this.user);
    if (this.validateForm.valid){
      const obj = {
          userName: this.validateForm.controls.Username.value,
          password: this.validateForm.controls.password.value,
          email: this.validateForm.controls.email.value,
      };
      this.authService.register(obj).subscribe(data=>{
          this.router.navigate(['/admin/product-list']);
      })
    }
  }

  forbiddenNameValidator(control: FormControl):{[s:string]:boolean} {
    if(this.forbiddenName.indexOf(control.value)!== -1){
        return {"forbidden": true};
    }
    else {
      return {};
    }
  };


  // confirmationValidator = (control: FormControl):{[s:string]:boolean}=> {
  //   if (!control.value) {
  //     return { required: true };
  //   } else if (control.value !== this.validateForm.controls.password.value) {
  //     return { confirm: true, error: true };
  //   }
  //   return {};
  // };

  confirmationValidator(control: FormControl):{[s:string]:boolean} {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
