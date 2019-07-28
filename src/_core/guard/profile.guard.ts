import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { StoreService } from "../store/store.service";

@Injectable({
  providedIn: "root"
})
export class ProfileGuard implements CanActivate {
  profile;
  constructor(private store: StoreService, private router: Router) {
    this.store.profile.subscribe(info => (this.profile = info));
    console.log("guard");
  }

  canActivate(): boolean {
    if (this.profile) {
      return true;
    }
    this.router.navigate(["/"]);
    return false;
  }
}
