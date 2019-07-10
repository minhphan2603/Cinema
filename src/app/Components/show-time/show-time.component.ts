import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs/operators";

@Component({
  selector: "app-show-time",
  templateUrl: "./show-time.component.html",
  styleUrls: ["./show-time.component.scss"]
})
export class ShowTimeComponent implements OnInit {
  @Input() nowShowingList: Array<any>;
  @Input() comingSoonList: Array<any>;

  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}
}
