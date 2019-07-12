import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./Pages/home/home.module#HomeModule"
  },
  {
    path: "phim",
    loadChildren: "./Pages/movie-detail/movie-detail.module#MovieDetailModule"
  },
  {
    path: "dang-ky",
    loadChildren: "./Pages/register/register.module#RegisterModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
