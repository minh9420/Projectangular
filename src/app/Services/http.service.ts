import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  private heroesUrl = 'http://localhost:3000';
  getHeroes(): Observable<any[]> {
    return this.http.get<any>(this.heroesUrl)
  }
}
