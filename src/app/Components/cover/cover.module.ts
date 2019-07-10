import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoverComponent } from "./cover.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [CoverComponent],
  exports: [CoverComponent],
  imports: [CommonModule, NgbModule]
})
export class CoverModule {}
