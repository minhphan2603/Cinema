export const environment = {
  production: true,
  movieListURL:
    "http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06",
  movieDetailURL: id =>
    `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`
};
