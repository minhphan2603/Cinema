import {
  Component,
  OnInit,
  AfterContentChecked,
  AfterViewChecked,
  ViewChild
} from "@angular/core";
import { DataService } from "src/_core/data/data.service";
import { StoreService } from "src/_core/store/store.service";
import { ShowTimeComponent } from "src/app/Components/show-time/show-time.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent
  implements OnInit, AfterContentChecked, AfterViewChecked {
  isDataLoaded: boolean = false;
  isViewLoaded: boolean = false;
  scrolledTo = null;

  movieList;

  nowShowingList: Array<any>;

  comingSoonList: Array<any>;

  moviesInCover: Array<any>;

  @ViewChild(ShowTimeComponent, { static: false }) showTime: ShowTimeComponent;

  constructor(private dataService: DataService, private store: StoreService) {
    this.store.scrolledTo.subscribe(pos => {
      this.scrolledTo = pos;
    });
  }

  ngOnInit() {
    this.getMovieListAndClassify();
  }

  ngAfterContentChecked() {
    if (this.scrolledTo && this.isViewLoaded) {
      const { id, tabIndex } = this.scrolledTo;
      if (tabIndex) {
        this.showTime.selectedIndex = parseInt(tabIndex, 10);
      }
      document.getElementById(id).scrollIntoView(true);
      this.store.scrollTo(null);
    }
  }

  ngAfterViewChecked() {
    if (this.isDataLoaded && !this.isViewLoaded) {
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
