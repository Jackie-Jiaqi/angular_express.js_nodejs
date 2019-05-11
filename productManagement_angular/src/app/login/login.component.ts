import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../alert/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user: User;
  isLogin:any=false;
  validateForm: FormGroup;
  constructor(private authService: AuthService,private router:Router
    ,private alertService:AlertService) {
      
   }

  ngOnInit() {
    // this.user.email="hello email"
    this.validateForm = new FormGroup(
      {
        userName: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
    }
    );
  }
  onSubmit(){
    // console.log("the submitted data is ", this.user);
    const obj= {
      userName:this.validateForm.controls.userName.value,
      password:this.validateForm.controls.password.value,
    }
    this.authService.login(obj).subscribe(data=>{
        if (data['code']=='0'){//login successful
            this.isLogin=true;
            sessionStorage.setItem('status',this.isLogin);
            this.router.navigate(['/admin/product-list']);
        }
        else if (data['code']=='1'){// password error
            this.alertService.error('password error!');
        }
        else
        this.alertService.error('user name does not exist!');
    });
    // else{
    //   this.alertService.error("username or password error")
    // }
  }
}
