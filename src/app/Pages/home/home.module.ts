import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HeaderModule } from "../../Components/header/header.module";
import { CoverModule } from "src/app/Components/cover/cover.module";
import { MaterialModule } from "src/_core/material/material.module";
import { ShowTimeModule } from "src/app/Components/show-time/show-time.module";
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CoverModule,
    ShowTimeModule,
    NgxLoadingModule
  ]
})
export class HomeModule {}
