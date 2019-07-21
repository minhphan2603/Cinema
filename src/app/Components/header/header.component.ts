import { Component, ViewChild } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";
import { Router } from "@angular/router";
import { StoreService } from "src/_core/store/store.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  isAuthenticated = this.store.isAuthenticated;
  profile;
  isDrawed: boolean = false;
  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches),
      distinctUntilChanged((p, q) => p === q)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private store: StoreService,
    private snackBar: MatSnackBar
  ) {
    this.store.profile.subscribe(profile => (this.profile = profile));
  }

  drawMenu() {
    this.isDrawed = !this.isDrawed;
  }

  scrollTo(route, id, tabIndex): void {
    this.store.scrollTo({ id, tabIndex });
    this.router.navigate([route]);
  }

  logout() {
    localStorage.removeItem("profile");
    this.store.setProfile(null);
    this.snackBar.open("Ban da dang xuat thanh cong!", "Hen gap lai!", {
      duration: 2000
    });
  }
}
