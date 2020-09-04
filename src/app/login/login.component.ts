import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { RouterLink, Router } from '@angular/router';
import { AuthenticationService } from '../servicios/authentication-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(
    public router : Router,     
    public authService : AuthenticationService
    ) {
    this.user = new User();
   }

  ngOnInit(): void {
  }
  
  login()
  {
    if(this.user.name != null && this.user.password != null)
    {
      this.authService.SignIn(this.user.name,this.user.password).then((res) => {
        this.router.navigate(['bienvenido']);
      }).catch((ex) => {
        console.log('aaaa');
        this.router.navigate(['error'])     
 });
    }
   

  }
}
