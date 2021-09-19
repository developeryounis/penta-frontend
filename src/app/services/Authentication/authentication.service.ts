import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let url = environment.apiUrl + '​/api​/Login​/Login';
    return this.http.post<any>(environment.apiUrl + '​/api​/Login​/Login', { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('Token', JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('TokenInfo');
  }
}
