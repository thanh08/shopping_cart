System.register([], function (exports_1, context_1) {
    "use strict";
    var SanPhamGioHang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SanPhamGioHang = /** @class */ (function () {
                function SanPhamGioHang(sanpham, soluong) {
                    this.sanpham = sanpham;
                    this.soluong = soluong;
                }
                SanPhamGioHang.prototype.tinhtien = function () {
                    return;
                };
                SanPhamGioHang.prototype.showsanphamtronggiohang = function () {
                    return;
                };
                SanPhamGioHang.prototype.laySanpham = function () {
                    return this.sanpham;
                };
                SanPhamGioHang.prototype.thaydoisoluong = function (soluong) {
                    this.soluong = soluong;
                };
                SanPhamGioHang.prototype.laysoluong = function () {
                    return this.soluong;
                };
                return SanPhamGioHang;
            }());
            exports_1("SanPhamGioHang", SanPhamGioHang);
        }
    };
});
