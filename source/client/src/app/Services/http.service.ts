import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetConfig } from '../Interfaces/request.params';

interface IHttpService {
  get: <T>(config: GetConfig) => Promise<any>;
  post: <T>(config: GetConfig) => Promise<any>;
  // put: <T>(config:GetConfig) => Promise<any>;
  // delete: <T>(config:GetConfig) => Promise<any>;

}

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpService {

  constructor(
    private http: HttpClient
  ) { }

  public get = <T>(config: GetConfig): Promise<any> => this.http.get(`http://localhost:8080${config.url}`, { params: config.querystrings }).toPromise();

  public post = <T>(config: GetConfig): Promise<any> => this.http.post(`http://localhost:8080${config.url}`, { user: 'user', pass: 'pass' }).toPromise();

  // public put = <T>(config:Config): Promise<any> => this.http.put<T>(url, queryParams).toPromise();

  // public delete = <T>(config:Config): Promise<any> => this.http.delete<T>(url, queryParams).toPromise();

}
