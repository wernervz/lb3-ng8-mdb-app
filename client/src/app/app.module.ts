import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AuthModule } from './auth/auth.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProtectedComponent } from './protected/protected.component';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { DemoComponent } from './protected/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProtectedComponent,
    UnprotectedComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
