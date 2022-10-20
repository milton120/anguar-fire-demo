import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    this.userService.signUpUser(this.email, this.password);
  }

}
