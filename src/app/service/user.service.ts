import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  logInUser(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(
      (value) => {
        console.log('log in successfull', value);
        this.router.navigate(['/home'])
      },
      error => {
        console.log('error logging in: ', error);
      }
    )
  }

  signUpUser(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(
      (value) => {
        console.log('user sign up successfull', value);
        this.router.navigate(['/login']);
      },
      error => {
        console.log('user sign up error');
      }
    )
  }

  logOutUser() {
    this.angularFireAuth.signOut().then(
      ()=> {
        console.log('user sign out');
        this.router.navigate(['/login']);
      },
      error => {
        console.log('Error logging out');
      }
    )
  }
}
