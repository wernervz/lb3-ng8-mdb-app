import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username;
  public password;

  public returnUrl = 'unprotected'

  public loginFailed: boolean = false;
  public errorMsg: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private authSvc: AuthService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") ? this.route.snapshot.queryParamMap.get("returnUrl") : 'unprotected'
  }

  validateCreds() {
    if (this.username && this.username.length > 1 &&
      this.password && this.password.length > 1) {
        return false
      } else {
        return true
      }
  }

  login() {
    this.authSvc.login({
      username: this.username,
      password: this.password
    }).pipe(catchError(err => {
      this.loginFailed = true
      this.errorMsg = err.message
      return throwError(err.message)
    })).subscribe(token => {
      let success = this.router.navigate([this.returnUrl])
    })
  }

  backToUnprotected() {
    let success = this.router.navigate(['unprotected'])
  }
}
