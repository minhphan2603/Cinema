import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";
import { MaterialModule } from "src/_core/material/material.module";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SuccessfullRegisterComponent } from "./successfull-register.component";

@NgModule({
  declarations: [RegisterComponent, SuccessfullRegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [SuccessfullRegisterComponent]
})
export class RegisterModule {}
