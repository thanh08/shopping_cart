System.register(["./sanpham.js"], function (exports_1, context_1) {
    "use strict";
    var sanpham_js_1, QuanLyHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (sanpham_js_1_1) {
                sanpham_js_1 = sanpham_js_1_1;
            }
        ],
        execute: function () {
            QuanLyHang = /** @class */ (function () {
                function QuanLyHang() {
                    this.hang = [];
                    var sanpham1 = new sanpham_js_1.SanPham(1, 'Tủ lạnh', 'images/2.jpg', 'Tủ lạnh đến từ Samsung', 5000000, true);
                    this.addSanPham(sanpham1);
                    var sanpham2 = new sanpham_js_1.SanPham(2, 'Tủ lạnh mini', 'images/3.jpg', 'Tủ lạnh đến từ Beko', 1000000, true);
                    this.addSanPham(sanpham2);
                    var sanpham2 = new sanpham_js_1.SanPham(3, 'Ghế xoay', 'images/1.jpg', 'Ghế xoay đến từ Platic', 250000, true);
                    this.addSanPham(sanpham2);
                }
                QuanLyHang.prototype.getCacSanPham = function () {
                    return this.hang;
                };
                QuanLyHang.prototype.getSanPhambyId = function (idsanpham) {
                    for (var i = 0; i < this.hang.length; i++) {
                        if (this.hang[i].id == idsanpham) {
                            return this.hang[i];
                        }
                    }
                };
                QuanLyHang.prototype.addSanPham = function (sp) {
                    this.hang.push(sp); //dùng hàm push để đẩy dữ liệu vào mảng
                };
                QuanLyHang.prototype.showSanPham = function () {
                    //show các sp html 
                    var danhsachHTML = '';
                    if (this.hang.length != 0) {
                        for (var i = 0; i < this.hang.length; i++) {
                            danhsachHTML += "\n                <div class=\"col-sm-4\"\n            <div class=\"card\" id-" + this.hang[i].id + ">\n                  <img class=\"card-img-top\" src=\"" + this.hang[i].anh + "\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">" + this.hang[i].ten + "</h4>\n                    <p class=\"card-text\">" + this.hang[i].mota + "</p>\n                    <div class=\"giasanphamkhac\">" + this.hang[i].gia + "</div>";
                            if (this.hang[i].tinhtrang = false) {
                                danhsachHTML += "<button type=\"button\" class=\"btn btn-info disabled\" >H\u1EBFt h\u00E0ng</button";
                            }
                            else {
                                danhsachHTML += "<button type=\"button\" class=\"btn btn-info muangay \" id-sp=\"" + this.hang[i].id + "\" >Mua h\u00E0ng</button";
                            }
                            danhsachHTML += "</div>\n                </div>\n                </div>\n                ";
                        }
                        return danhsachHTML;
                    }
                    else {
                        return 'sanphamdangdccapnhat';
                    }
                };
                return QuanLyHang;
            }());
            exports_1("QuanLyHang", QuanLyHang);
        }
    };
});
