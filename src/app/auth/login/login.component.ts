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
      console.log(user); 
      if(user != null){

        this.router.navigate(['/inicio']);
      }else{
        this.authSvc.logout();
        alert('No pertenece a la poderosisima universidad del Cauca');
      }
    } catch (error) {console.log(error)}
   
  }

  async onLogin(){
    console.log('Form->',this.loginForm.value);
    const {email,password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email,password);
      if(user){
        this.router.navigate(['/inicio']);
      }
    }catch(error){console.log(error)}
  }
}
