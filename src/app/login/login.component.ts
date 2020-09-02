import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(public router : Router) {
    this.user = new User();
   }

  ngOnInit(): void {
  }
  
  login()
  {
    if(this.user.name != null && this.user.password != null)
    {
      this.router.navigate(['bienvenido']);
    }
    else
    {
      this.router.navigate(['error']);
    }

  }
}
