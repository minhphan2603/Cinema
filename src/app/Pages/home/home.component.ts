import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  AfterContentChecked
} from "@angular/core";
import { DataService } from "src/_core/data/data.service";
import { Router } from "@angular/router";
import { ShowTimeComponent } from "src/app/Components/show-time/show-time.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent
  implements OnInit, AfterContentChecked, AfterViewChecked {
  isDataLoaded: boolean = false;
  isViewLoaded: boolean = false;
  movieList;

  nowShowingList: Array<any>;

  comingSoonList: Array<any>;

  moviesInCover: Array<any>;

  @ViewChild(ShowTimeComponent, { static: false }) showTime: ShowTimeComponent;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getMovieListAndClassify();
  }

  ngAfterContentChecked() {
    if (window.history.state.scrollTo && this.isViewLoaded) {
      const { id, tabIndex } = window.history.state.scrollTo;
      delete window.history.state.scrollTo;
      document.getElementById(id).scrollIntoView({ block: "start" });
      if (tabIndex) {
        this.showTime.matTabGroup.selectedIndex = parseInt(tabIndex);
      }
    }
  }

  ngAfterViewChecked(): void {
    if (this.isDataLoaded) {
      this.isViewLoaded = true;
    }
  }

  getMovieListAndClassify() {
    this.dataService.getMovieList$().subscribe(
      res => {
        this.movieList = res;
        this.nowShowingList = res
          .filter(
            film =>
              new Date().getTime() >= new Date(film.NgayKhoiChieu).getTime()
          )
          .sort(
            (a, b) =>
              new Date(b.NgayKhoiChieu).getTime() -
              new Date(a.NgayKhoiChieu).getTime()
          );
        this.comingSoonList = res
          .filter(
            film =>
              new Date().getTime() < new Date(film.NgayKhoiChieu).getTime()
          )
          .sort(
            (a, b) =>
              new Date(a.NgayKhoiChieu).getTime() -
              new Date(b.NgayKhoiChieu).getTime()
          );
        this.moviesInCover = this.nowShowingList.slice(
          0,
          this.nowShowingList.length > 5 ? 5 : this.nowShowingList.length
        );
        this.isDataLoaded = true;
      },
      err => {
        console.log(err);
        this.isDataLoaded = true;
      }
    );
  }
}
