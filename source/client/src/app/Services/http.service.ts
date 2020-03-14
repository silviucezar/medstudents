import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetConfig, PostConfig } from '../Interfaces/request.params';

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

  public post = <T>(config: PostConfig): Promise<any> => {
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    console.log(`http://localhost:8080/${config.url}`)
    return this.http.post(`http://localhost:8080/${config.url}`, this.encodeUrl(config.body), { headers }).toPromise();
  };

  // public put = <T>(config:Config): Promise<any> => this.http.put<T>(url, queryParams).toPromise();

  // public delete = <T>(config:Config): Promise<any> => this.http.delete<T>(url, queryParams).toPromise();

  private encodeUrl(body: any): string {
    console.log(body)
    let query = '';
    let keys = Object.keys(body);
    keys.forEach((key, index) => {
      query += `${key}=${body[key]}${index !== keys.length - 1 ? '&' : ''}`;
    });
    return query;
  }
}
