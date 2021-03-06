// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  movieListURL:
    "http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06",
  movieDetailURL: id =>
    `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`,
  registerUserURL: "http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",
  loginUserURL: (
    userName,
    password
  ) => `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${userName}&MatKhau=${password}
  `
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
