import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoverComponent } from "./cover.component";

@NgModule({
  declarations: [CoverComponent],
  exports: [CoverComponent],
  imports: [CommonModule]
})
export class CoverModule {}
