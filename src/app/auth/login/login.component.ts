import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
 
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

 async onGoogleLogin(){
    try { 
      const user = await this.authSvc.loginGoogle(); 
      if(user){
        //Redirect to Home page 
        this.router.navigate(['/inicio']);
      }
    } catch (error) {console.log(error)}
   
  }

  async onLogin(){
    console.log('Form->',this.loginForm.value);
    const {email,password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email,password);
      if(user){
        //Redirect to Home page 
        this.router.navigate(['/inicio']);
      }
    }catch(error){console.log(error)}
  }
}
