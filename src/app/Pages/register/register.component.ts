import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "src/_core/user/user.service";
import { MatSnackBar, MatDialog } from "@angular/material";
import { SuccessfullRegisterComponent } from "./successfull-register.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  submitForm(form: NgForm) {
    this.dialog.open(SuccessfullRegisterComponent, {
      width: "500px",
      height: "500px"
    });
    // const newUser = {
    //   TaiKhoan: form.value.userName,
    //   MatKhau: form.value.password,
    //   Email: form.value.email,
    //   SoDT: form.value.phone,
    //   MaNhom: "GP06",
    //   MaLoaiNguoiDung: "KhachHang"
    // };
    // this.userService.register(newUser).subscribe(
    //   res => {
    //     if (res === "Tài khoản đã tồn tại") {
    //       this.snackBar.open(res.toString(), "Nhap lai", {
    //         duration: 2000,
    //         panelClass: "snack-bar-error"
    //       });
    //     } else {
    //     }
    //   },
    //   err =>
    //     this.snackBar.open("Loi server!", "Thu lai", {
    //       duration: 2000,
    //       panelClass: "snack-bar-error"
    //     })
    // );
  }
  clearForm(form: NgForm) {
    form.resetForm();
  }
}
