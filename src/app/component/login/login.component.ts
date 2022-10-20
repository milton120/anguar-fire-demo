import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  logIn() {
    this.userService.logInUser(this.email, this.password);
  }

}
