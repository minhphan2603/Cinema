import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewChecked
} from "@angular/core";
import { Observable } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, distinctUntilChanged } from "rxjs/operators";
import { NgbCarousel } from "@ng-bootstrap/ng-bootstrap";

const divideArray = (arr: Array<any>, divider: number) => {
  const result: Array<Array<any>> = [];
  for (let i = 0; i < Math.ceil(arr.length / divider); i++) {
    result.push(
      arr.slice(
        i * divider,
        (i + 1) * divider > arr.length ? arr.length : (i + 1) * divider
      )
    );
  }
  return result;
};

@Component({
  selector: "app-show-time",
  templateUrl: "./show-time.component.html",
  styleUrls: ["./show-time.component.scss"]
})
export class ShowTimeComponent implements OnInit, AfterViewChecked {
  @Input() nowShowingList: Array<any>;
  @Input() comingSoonList: Array<any>;
  nowShowingMatrix: Array<Array<any>>;
  comingSoonMatrix: Array<Array<any>>;
  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      map(result => result.matches),
      distinctUntilChanged((p, q) => p === q)
    );
  isMedium$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Medium])
    .pipe(
      map(result => result.matches),
      distinctUntilChanged((p, q) => p === q)
    );
  isLarge$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.XLarge])
    .pipe(
      map(result => result.matches),
      distinctUntilChanged((p, q) => p === q)
    );

  selectedIndex = 0;

  @ViewChild("nowShowingCarousel", { static: false })
  nowShowingCarousel: NgbCarousel;
  @ViewChild("comingSoonCarousel", { static: false })
  comingSoonCarousel: NgbCarousel;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isSmall$.subscribe(isSmall => {
      if (isSmall) {
        this.nowShowingMatrix = divideArray(this.nowShowingList, 4);
        this.comingSoonMatrix = divideArray(this.comingSoonList, 4);
      }
    });
    this.isMedium$.subscribe(isMedium => {
      if (isMedium) {
        this.nowShowingMatrix = divideArray(this.nowShowingList, 6);
        this.comingSoonMatrix = divideArray(this.comingSoonList, 6);
      }
    });
    this.isLarge$.subscribe(isLarge => {
      if (isLarge) {
        this.nowShowingMatrix = divideArray(this.nowShowingList, 8);
        this.comingSoonMatrix = divideArray(this.comingSoonList, 8);
      }
    });
  }

  ngOnInit() {}

  ngAfterViewChecked() {
    this.nowShowingCarousel.pause();
    this.comingSoonCarousel.pause();
  }

  changeSelectedIndex(event) {
    this.selectedIndex = event;
  }
}
