import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  public message: string = 'Test Message...'

  public isError:boolean = false
  public isSuccess:boolean = false
  public errorMsg
  public successMsg

  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }

  callDemoApi() {
    let qp = [
      {
        'name': 'msg',
        'value': this.message
      }
    ]
    this.authSvc.makeAuthenticatedHttpGet('/api/Demos/echo', qp).subscribe(success => {
      this.successMsg = JSON.stringify(success, null, 2)
      this.isSuccess = true
    }, err => {
      this.errorMsg = err
      this.isError = true
    })
  }

  closeAlert() {
    this.isError = false
    this.isSuccess = false
  }
}
