import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string, httpHeader?: object): Observable<any> {
    return this.http.get(url, httpHeader);
  }
  post(url: string, httpHeader?: object, body?: any): Observable<any> {
    return this.http.post(url, body, httpHeader);
  }

  request(request?: HttpRequest<any>): Observable<any> {
    return this.http.request(request);
  }

  delete(url: string, httpHeader?: object): Observable<any> {
    return this.http.delete(url, httpHeader);
  }

  getMockData(file: string): Observable<any> {
    return this.http.get(file);
  }

}
