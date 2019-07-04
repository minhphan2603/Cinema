import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HeaderModule } from "../../Components/header/header.module";
import { CoverModule } from "src/app/Components/cover/cover.module";
import { MaterialModule } from "src/_core/material/material.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HeaderModule,
    CoverModule
  ]
})
export class HomeModule {}
