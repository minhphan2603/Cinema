import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { take } from "rxjs/operators";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-successfull-register",
  template: `
    <div class="container">
      <h4>Dang ki thanh cong!</h4>
      <p>se tu dong chuyen den trang chu trong {{ timer }} giay ...</p>
    </div>
  `
})
export class SuccessfullRegisterComponent implements OnInit {
  timer: number = 3;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    interval(1000)
      .pipe(take(4))
      .subscribe(
        time => (this.timer = 2 - time),
        err => console.log(err),
        () => this.dialog.closeAll()
      );
  }
}
