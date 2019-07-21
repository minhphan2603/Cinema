import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private _profile = new BehaviorSubject(null);

  private _isAuthenticated = new BehaviorSubject(false);

  private _scrollTo = new BehaviorSubject(null);

  scrolledTo: Observable<any> = this._scrollTo.asObservable();

  profile: Observable<any> = this._profile.asObservable();

  isAuthenticated: Observable<any> = this._isAuthenticated.asObservable();

  setProfile(user: any) {
    this._profile.next(user);

    if (user) {
      this._isAuthenticated.next(true);
    } else {
      this._isAuthenticated.next(false);
    }
  }

  scrollTo(pos): void {
    this._scrollTo.next(pos);
  }

  constructor() {}
}
