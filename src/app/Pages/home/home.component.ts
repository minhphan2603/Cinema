import { Component, OnInit } from "@angular/core";
import { StoreService } from "src/_core/store/store.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private store: StoreService) {
    this.store.setProfile(JSON.parse(localStorage.getItem("profile")));
  }

  ngOnInit() {}
}
