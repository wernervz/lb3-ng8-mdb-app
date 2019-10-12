import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports:      [ CommonModule, HttpClientModule, FormsModule, MDBBootstrapModule ],
  declarations: [ LoginComponent ],
  providers:    [ AuthService, AuthGuard ],
  exports:      [ LoginComponent ]
})

export class AuthModule {
  constructor() { }
}
