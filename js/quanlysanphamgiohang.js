System.register([], function (exports_1, context_1) {
    "use strict";
    var Quanlysanphamgiohang;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Quanlysanphamgiohang = /** @class */ (function () {
                function Quanlysanphamgiohang() {
                    this.cacsanphamtronggiohang = [];
                }
                Quanlysanphamgiohang.prototype.xemgiohang = function () {
                    return this.cacsanphamtronggiohang;
                };
                Quanlysanphamgiohang.prototype.tangthemsoluongsanpham = function (motsanpham) {
                    var chiso = this.checksptruockhithem(motsanpham);
                    var soluonghientai = this.cacsanphamtronggiohang[chiso].laysoluong();
                    soluonghientai = soluonghientai + 1;
                    this.cacsanphamtronggiohang[chiso].thaydoisoluong(soluonghientai);
                };
                Quanlysanphamgiohang.prototype.themsanphamgiohang = function (motsanpham) {
                    this.cacsanphamtronggiohang.push(motsanpham);
                };
                Quanlysanphamgiohang.prototype.checksptruockhithem = function (motsanpham) {
                    for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
                        if (this.cacsanphamtronggiohang[i].laySanpham().id == motsanpham.id) {
                            return i;
                        }
                    }
                    return -1;
                };
                Quanlysanphamgiohang.prototype.updatesanpham = function (motsanpham, soluong) {
                    for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
                        if (this.cacsanphamtronggiohang[i].laySanpham().id == motsanpham.id) {
                            //cập nhật lại số lượng vào trong mảng
                            this.cacsanphamtronggiohang[i].thaydoisoluong(soluong);
                        }
                    }
                };
                Quanlysanphamgiohang.prototype.xoasanpham = function (motsanpham) {
                    for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
                        if (this.cacsanphamtronggiohang[i].laySanpham().id == motsanpham.id) {
                            this.cacsanphamtronggiohang.splice(i, 1);
                        }
                    }
                };
                Quanlysanphamgiohang.prototype.tinhsoluong = function () {
                    var soluongsp = 0;
                    for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
                        soluongsp += this.cacsanphamtronggiohang[i].laysoluong();
                    }
                    return soluongsp;
                };
                Quanlysanphamgiohang.prototype.tinhgia = function () {
                    var tongcong = 0;
                    for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
                        var gia = this.cacsanphamtronggiohang[i].laySanpham().gia;
                        var soluong = this.cacsanphamtronggiohang[i].laysoluong();
                        var gia1sp = gia * soluong;
                        tongcong += gia1sp;
                    }
                    return tongcong;
                };
                Quanlysanphamgiohang.prototype.hienthigiohang = function () {
                    var giohangHTML = "";
                    for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
                        giohangHTML += "\n            <div class=\"sanphamdcchon\" id-" + this.cacsanphamtronggiohang[i].laySanpham().id + ">\n              <div class=\"phan1-1\">\n             <img src=\"" + this.cacsanphamtronggiohang[i].laySanpham().anh + "\" alt=\"\" srcset=\"\">\n              </div>\n              <div class=\"phan1-2\">\n                <div class=\"tex1\">" + this.cacsanphamtronggiohang[i].laySanpham().ten + "</div>\n                <div class=\"text2\">\n                  <button type=\"button\" class=\"btn btn-info xoasp\" data-idxoasp =\"" + this.cacsanphamtronggiohang[i].laySanpham().id + "\" >X\u00F3a</button>\n                </div>\n              </div>\n              <div class=\"phan1-3\">\n                <div class=\"textgia\">" + this.cacsanphamtronggiohang[i].laySanpham().gia + "\n                </div>\n                <div class=\"textgiamgia\">600.000\u0111 | -13%\n\n                </div>\n              </div>\n              <div class=\"phan1-4\">\n                <form>\n                  <input type=\"number\" name=\"\" class=\"osoluong\" id=\"\" data-idsp=\"" + this.cacsanphamtronggiohang[i].laySanpham().id + "\" value=\"" + this.cacsanphamtronggiohang[i].laysoluong() + "\" min=\"1\">\n                </form>\n              </div>\n            </div>\n            ";
                    }
                    return giohangHTML;
                };
                return Quanlysanphamgiohang;
            }());
            exports_1("Quanlysanphamgiohang", Quanlysanphamgiohang);
        }
    };
});
