import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  // http://localhost:3030/users/

  login(email: string, password: string) {
    return this.http
      .post<User>(`${environment.apiUrl}/users/login`, { email, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('username', response.username);
          localStorage.setItem('email', response.email);
          localStorage.setItem('userId', response._id);
          localStorage.setItem('accessToken', response.accessToken);

          this.user$$.next({
            email: response.email,
            username: response.username,
            _id: response._id,
            accessToken: response.accessToken,
          });

          console.log('login response', response);
        })
      );
  }

  regisetr(email: string, password: string) {
    return this.http
      .post<User>(`${environment.apiUrl}/users/register`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('username', response.username);
          localStorage.setItem('email', response.email);
          localStorage.setItem('userId', response._id);
          localStorage.setItem('accessToken', response.accessToken);

          this.user$$.next({
            email: response.email,
            username: response.username,
            _id: response._id,
            accessToken: response.accessToken,
          });
          console.log('response', response);
        })
      );
  }

  logout() {
    return this.http.post<User>(`${environment.apiUrl}/users/logout`, {}).pipe(
      tap((response) => {
        localStorage.clear();
        this.user$$.next(undefined);
      })
    );
  }

  getProfile() {
    return this.http
      .get<User>(`${environment.apiUrl}/users/me`)
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
