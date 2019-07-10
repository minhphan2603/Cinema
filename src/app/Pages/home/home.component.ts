import { Component, OnInit, OnChanges, AfterViewChecked } from "@angular/core";
import { DataService } from "src/_core/data/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewChecked {
  loading: boolean = true;
  movieList: Array<any>;

  nowShowingList: Array<any>;

  comingSoonList: Array<any>;

  moviesInCover: Array<any>;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getMovieListAndClassify();
  }

  ngAfterViewChecked() {
    if (window.history.state.scrollTo && this.movieList) {
      const id = window.history.state.scrollTo;
      document.getElementById(id).scrollIntoView({ block: "start" });
      delete window.history.state.scrollTo;
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
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
