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

  login(credentials?: UserCredentials) {
    this.http.post<SessionDetails>({ url: 'login', body: credentials || { username: localStorage.getItem('username') || 'Guest' } }).then(sessionDetails => {
      sessionDetails.status === 'success' ? this.$session.next(new Session(sessionDetails)) : this.failedAuth(sessionDetails.message);
      this.r.navigate([`${userType[sessionDetails.userType] || 'login'}`]);
    });
  }

  failedAuth(message: string) {

  }
}
