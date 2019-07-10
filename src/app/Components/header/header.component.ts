import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  isAuthenticated: boolean = false;
  isDrawed: boolean = false;
  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  drawMenu() {
    this.isDrawed = !this.isDrawed;
  }

  scrollTo(path, id) {
    this.router.navigate([path], { state: { scrollTo: id } }).then(val => {
      if (val === null) {
        document.getElementById(id).scrollIntoView();
      }
    });
  }
}
