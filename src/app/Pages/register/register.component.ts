import { Component, OnInit } from "@angular/core";
import { NgForm, FormControl, Validators, FormGroup } from "@angular/forms";
import { UserService } from "src/_core/user/user.service";
import { MatSnackBar, MatDialog } from "@angular/material";
import { SuccessfullRegisterComponent } from "./successfull-register.component";
import { Router } from "@angular/router";
import { StoreService } from "src/_core/store/store.service";
import { checkConfirmedPassword } from "../../../_core/validators/validators";
// import { delay } from "rxjs/operators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup(
    {
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(6),
        Validators.pattern("^[a-zA-Z0-9]*$")
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      password2: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern("(0)([1-9])([0-9]{8})")
      ])
    },
    checkConfirmedPassword()
  );

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private store: StoreService
  ) {}

  ngOnInit() {}

  submitForm() {
    const newUser = {
      TaiKhoan: this.registerForm.value.userName,
      MatKhau: this.registerForm.value.password,
      HoTen: this.registerForm.value.fullName,
      Email: this.registerForm.value.email,
      SoDT: this.registerForm.value.phone,
      MaNhom: "GP06",
      MaLoaiNguoiDung: "KhachHang"
    };

    this.userService.register(newUser).subscribe(
      res => {
        if (res === "Tài khoản đã tồn tại") {
          this.snackBar.open(res.toString(), "Nhap lai", {
            duration: 2000,
            panelClass: "snack-bar-error"
          });
        } else {
          localStorage.setItem("profile", JSON.stringify(res));
          this.store.setProfile(res);
          this.router.navigate(["/"]);
          this.dialog.open(SuccessfullRegisterComponent, {
            width: "100vw",
            height: "100vh",
            maxWidth: "100vw",
            disableClose: true
          });
          // .afterOpened()
          // .pipe(delay(3000))
          // .subscribe(() => this.dialog.closeAll());
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
    const errors = this.registerForm.controls[formControlName].errors;
    if (errors.required) {
      return `Ban phai nhap ${text}`;
    }
    if (errors.minlength) {
      return `${text} phai co it nhat ${errors.minlength.requiredLength} ki tu`;
    }
    if (errors.maxlength) {
      return `${text} khong duoc vuot qua ${
        errors.maxlength.requiredLength
      } ki tu`;
    }
    if (errors.email) {
      return `Ban phai nhap dung email`;
    }
    if (errors.pattern) {
      if (formControlName === "userName") {
        return `Ten tai khoan khong duoc chua ki tu dac biet`;
      }
      if (formControlName === "phone") {
        return `Ban phai nhap dung so dien thoai`;
      }
    }
  }
}
