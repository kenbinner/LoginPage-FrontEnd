import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from "../model/user.model";
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  user!: User;
  loginForm!: FormGroup;
  responseCode!: string;
  errorMessage!: string;
  successMessage!: string;
  passwordMismatch!: boolean;

  constructor(private fb: FormBuilder, private loginPageService: LoginPageService) { }

  ngOnInit() {
    this.user = new User();
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: [this.user.email, [Validators.required]],
      password: [this.user.password, [Validators.required]]
    })
  }

  login(){
    console.log("login method triggered")
    this.errorMessage = "";
    this.successMessage = "";
    this.passwordMismatch = false;
    this.user = this.loginForm.value as User;
    console.log(this.user);
    this.loginPageService.login(this.user).subscribe({
        next: (response: any) => {
            this.responseCode = response;
            if(this.responseCode == "01"){
              this.successMessage = "Successful Authentication";
            }else{
              this.successMessage = "Password is incorrect";
            }
        },
        error: (error: any) => {
            this.errorMessage = <any>error;
        }
      })
  }


}
