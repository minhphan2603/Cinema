import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { MainComponent } from "src/app/Components/main/main.component";
import { ProfileGuard } from "src/_core/guard/profile.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: MainComponent
      },
      {
        path: "dang-ky",
        loadChildren: "../register/register.module#RegisterModule"
      },
      {
        path: "dang-nhap",
        loadChildren: "../login/login.module#LoginModule"
      },
      {
        path: "tai-khoan",
        loadChildren: "../profile/profile.module#ProfileModule"
        // canActivate: [ProfileGuard]
      },
      {
        path: "phim",
        loadChildren: "../movie-detail/movie-detail.module#MovieDetailModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
