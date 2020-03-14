import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { AuthService } from 'src/app/Modules/auth/auth.service';

@Component({
  selector: 'app-form-log-in',
  templateUrl: './form-log-in.component.html',
  styleUrls: ['./form-log-in.component.less']
})
export class FormLogInComponent implements OnInit {

  constructor(
    private http:HttpService,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }

  login(credentials:any) {
    console.log(credentials)
    this.auth.login(credentials)
  }
}