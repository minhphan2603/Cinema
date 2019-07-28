import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { StoreService } from "src/_core/store/store.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit, AfterContentChecked {
  profile;
  constructor(private store: StoreService, private router: Router) {
    this.store.profile.subscribe(info => (this.profile = info));
  }

  ngOnInit() {}

  ngAfterContentChecked(): void {
    if (!this.profile) {
      this.router.navigate(["/"]);
    }
  }
}
