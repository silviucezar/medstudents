import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from 'src/app/Services/http.service';

import { Session } from './Session';
import { Subject } from 'rxjs';
import { SessionDetails } from 'src/app/Interfaces/session.details';
import { userType } from '../../Constants/users.contants'
import { UserCredentials } from 'src/app/Interfaces/user.details';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private $session: Subject<Session> = new Subject<Session>();

  constructor(
    private r: Router,
    private http: HttpService
  ) { }

  attemptLogin(credentials?: UserCredentials) {
    console.log('her')
    if (localStorage.getItem('userid') || credentials) {
      this.http.post<SessionDetails>({ url: credentials!.path, body: credentials || { userid: localStorage.getItem('userid') } })
        .then(sessionDetails => {
          sessionDetails.status === 'success' ? this.$session.next(new Session(sessionDetails.data)) : this.failedAuth(sessionDetails.message);
          console.log(sessionDetails)
          localStorage.setItem('token', sessionDetails.data.token);
          localStorage.setItem('userid', sessionDetails.data.userid);
          this.r.navigate([userType[sessionDetails.data.permission]]);
        });
    } else {
      this.r.navigate(['login']);
    }
  }

  private failedAuth(message: string) {

  }
}
