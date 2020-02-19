import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Session } from './Session';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private session = new Session();

  constructor(
    private r:Router
  ) { }

  init() { 
    this.r.navigate(['/login']);
  }
}
