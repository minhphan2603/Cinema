import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShowTimeComponent } from "./show-time.component";
import { MaterialModule } from "src/_core/material/material.module";
import { MovieItemModule } from "../movie-item/movie-item.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ShowTimeComponent],
  exports: [ShowTimeComponent],
  imports: [CommonModule, MaterialModule, MovieItemModule, NgbModule]
})
export class ShowTimeModule {}
