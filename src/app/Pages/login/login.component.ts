import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "src/_core/user/user.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { StoreService } from "src/_core/store/store.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private store: StoreService
  ) {}

  ngOnInit() {}

  submitForm() {
    const user = this.loginForm.value;
    this.userService.login(user).subscribe(
      res => {
        if (res === "Tài khoản hoặc mật khẩu không đúng !") {
          this.snackBar.open(res.toString(), "Dang nhap lai", {
            duration: 2000,
            panelClass: "snack-bar-error"
          });
        } else {
          localStorage.setItem("profile", JSON.stringify(res));
          this.store.setProfile(res);
          this.router.navigate(["/"]);
        }
      },
      err =>
        this.snackBar.open("Loi server!", "Thu lai", {
          duration: 2000,
          panelClass: "snack-bar-error"
        })
    );
  }

  getErrorMessage(formControlName: string, text: string) {
    const errors = this.loginForm.controls[formControlName].errors;
    if (errors.required) {
      return `Ban phai nhap ${text}`;
    }
  }
}
