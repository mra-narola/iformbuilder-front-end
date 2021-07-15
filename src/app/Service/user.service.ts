import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private httpclient: HttpClient) {}

  getUserData(): Observable<any[]> {
    return this.httpclient.get<any[]>(
      this.baseUrl + '?api=get_users',
      {}
    );
  }

  createUser(data: any): Observable<any[]> {
    return this.httpclient.post<any[]>(
      this.baseUrl + '?api=add_user',
      data
    );
  }
}
