import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/_core/data/data.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit {
  movieId: number;
  movieDetail: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getMovieId();
    this.getMovieDetail();
  }

  getMovieId() {
    this.activatedRoute.params.subscribe(params => (this.movieId = params.id));
  }

  getMovieDetail() {
    this.dataService.getMovieDetail$(this.movieId).subscribe(
      data => (this.movieDetail = data),
      err => {
        console.log(err);
        this.movieDetail = [];
      }
    );
  }
}
