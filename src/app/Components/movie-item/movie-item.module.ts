import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieItemComponent } from "./movie-item.component";
import { MaterialModule } from "src/_core/material/material.module";

@NgModule({
  declarations: [MovieItemComponent],
  exports: [MovieItemComponent],
  imports: [CommonModule, MaterialModule]
})
export class MovieItemModule {}
