import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { GetConfig } from 'src/app/Interfaces/request.params';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.less']
})
export class DebugComponent implements OnInit {

  public debug: string = '';

  public config = { url: '/login' };

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void { }

  doRequest() {
    const body = new URLSearchParams();
    body.set("user","user");
    body.set("pass","pass");
    this.http.post<any>(this.config as unknown as GetConfig).then(response => console.log(response));
  }

}
