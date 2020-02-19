import { Component } from '@angular/core';
import { AuthService } from './Modules/auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  host: {
    class: 'app'
  }
})
export class AppComponent {
  title = 'client';
  constructor(auth:AuthService) {
    auth.init();
  }
}
