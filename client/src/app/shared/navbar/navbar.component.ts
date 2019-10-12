import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authSvc:AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authSvc.logout().subscribe(success => {
      console.log('Logged out successfully.')
      this.router.navigate(['unprotected'])
    })
  }

}
