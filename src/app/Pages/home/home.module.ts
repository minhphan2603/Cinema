import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HeaderModule } from "../../Components/header/header.module";
import { MainModule } from "src/app/Components/main/main.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HeaderModule, MainModule]
})
export class HomeModule {}
