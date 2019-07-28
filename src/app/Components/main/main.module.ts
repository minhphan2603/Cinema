import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { CoverModule } from "../cover/cover.module";
import { ShowTimeModule } from "../show-time/show-time.module";
import { NgxLoadingModule } from "ngx-loading";
import { MaterialModule } from "src/_core/material/material.module";

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    CommonModule,
    CoverModule,
    ShowTimeModule,
    NgxLoadingModule,
    MaterialModule
  ]
})
export class MainModule {}
