import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieDetailComponent } from "./movie-detail.component";
import { MovieDetailRoutingModule } from "./movie-detail-routing.module";
import { HeaderModule } from "src/app/Components/header/header.module";
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    HeaderModule,
    NgxLoadingModule
  ]
})
export class MovieDetailModule {}
