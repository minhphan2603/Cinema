import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "app-successfull-register",
  template: `
    <h1>Hi</h1>
  `
})
export class SuccessfullRegisterComponent implements OnInit {
  timer: number;

  constructor() {}

  ngOnInit() {
    interval(3).subscribe(timer => (this.timer = timer));
  }
}
