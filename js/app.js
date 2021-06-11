System.register(["./quanlyhang.js", "./quanlysanphamgiohang.js", "./sanphamgiohang.js"], function (exports_1, context_1) {
    "use strict";
    var quanlyhang_js_1, quanlysanphamgiohang_js_1, sanphamgiohang_js_1, tatcasp, giohang, divcacsphamkhac, nutmuangay, divcacspgiohang, divsoluongspgiohang, divgiatamtinh, divgiacuoi, i, thongbaospgiohang;
    var __moduleName = context_1 && context_1.id;
    function xoa() {
        var nutxoa = document.querySelectorAll('.xoasp');
        for (var i = 0; i < nutxoa.length; i++) {
            nutxoa[i].addEventListener('click', function () {
                var idsanpham = this.getAttribute('data-idxoasp');
                var sanphamlayduoc = tatcasp.getSanPhambyId(idsanpham);
                console.log(sanphamlayduoc);
                giohang.xoasanpham(sanphamlayduoc);
                divcacspgiohang.innerHTML = giohang.hienthigiohang();
                //hiện thị số sp trong gio hàng
                divsoluongspgiohang.innerHTML = '( ' + giohang.tinhsoluong() + ' sản phẩm )';
                //hiện thị giá trong gio hàng
                divgiatamtinh.innerHTML = giohang.tinhgia() + 'đ';
                divgiacuoi.innerHTML = giohang.tinhgia() + 'đ';
                console.log(giohang.xemgiohang());
            });
        }
    }
    function thongbao(noidung) {
        thongbaospgiohang.innerHTML = noidung;
    }
    return {
        setters: [
            function (quanlyhang_js_1_1) {
                quanlyhang_js_1 = quanlyhang_js_1_1;
            },
            function (quanlysanphamgiohang_js_1_1) {
                quanlysanphamgiohang_js_1 = quanlysanphamgiohang_js_1_1;
            },
            function (sanphamgiohang_js_1_1) {
                sanphamgiohang_js_1 = sanphamgiohang_js_1_1;
            }
        ],
        execute: function () {
            tatcasp = new quanlyhang_js_1.QuanLyHang();
            giohang = new quanlysanphamgiohang_js_1.Quanlysanphamgiohang();
            //xuat ra html các san pham
            divcacsphamkhac = document.getElementById('spkhac');
            divcacsphamkhac.innerHTML = tatcasp.showSanPham();
            //xuat ra html trên phân gio hang thi chon sp
            nutmuangay = document.querySelectorAll('.muangay');
            divcacspgiohang = document.getElementById('spgiohang');
            divcacspgiohang.classList.remove('phan1');
            divsoluongspgiohang = document.querySelector('.giohang span');
            divgiatamtinh = document.querySelector('.textgiaphan2 .gia');
            divgiacuoi = document.querySelector('.giacuoi');
            for (i = 0; i < nutmuangay.length; i++) {
                nutmuangay[i].addEventListener('click', function () {
                    var idlayduoc = this.getAttribute('id-sp');
                    if (tatcasp.getSanPhambyId(idlayduoc) == 0) {
                        console.log('loi du lieu');
                    }
                    else {
                        //check nếu chưa có sp trong giỏ hàng thì thêm vào
                        //còn nếu có rồi thì tăng số lượng lên
                        divcacspgiohang.classList.add('phan1');
                        var splayduoc = tatcasp.getSanPhambyId(idlayduoc);
                        if (giohang.checksptruockhithem(splayduoc) == -1) {
                            var spduochuyendoisptronggiohang = new sanphamgiohang_js_1.SanPhamGioHang(splayduoc, 1);
                            giohang.themsanphamgiohang(spduochuyendoisptronggiohang);
                            thongbao('<div class="alert alert-success" role="alert"> <i class="far fa-check-square"></i><span> Bạn đã thêm sản phẩm vào giỏ hàng thành công!</span></div>');
                        }
                        else {
                            giohang.tangthemsoluongsanpham(splayduoc);
                        }
                        //hiện thị sp trên giỏ hàng push html ra
                        divcacspgiohang.innerHTML = giohang.hienthigiohang();
                        //hiện thị số sp trong gio hàng
                        divsoluongspgiohang.innerHTML = '( ' + giohang.tinhsoluong() + ' sản phẩm )';
                        //hiện thị giá trong gio hàng
                        divgiatamtinh.innerHTML = giohang.tinhgia() + 'đ';
                        divgiacuoi.innerHTML = giohang.tinhgia() + 'đ';
                        //cập nhật giá khi thay đổi số lượng
                        var osoluong = document.getElementsByClassName('osoluong');
                        for (var i = 0; i < osoluong.length; i++) {
                            osoluong[i].addEventListener('change', function () {
                                var idsanpham = this.getAttribute('data-idsp');
                                var sanphamlayduoc = tatcasp.getSanPhambyId(idsanpham);
                                var soluongsp = parseInt(this.value);
                                giohang.updatesanpham(sanphamlayduoc, soluongsp);
                                divsoluongspgiohang.innerHTML = '( ' + giohang.tinhsoluong() + ' sản phẩm )';
                                divgiatamtinh.innerHTML = giohang.tinhgia() + 'đ';
                                divgiacuoi.innerHTML = giohang.tinhgia() + 'đ';
                                thongbao('<div class="alert alert-info" role="alert"> <i class="far fa-check-square"></i><span> Bạn đã cập nhật lại sản phẩm trong giỏ hàng thành công!</span></div>');
                            });
                        }
                        //xóa sp
                        xoa();
                    }
                });
            }
            thongbaospgiohang = document.querySelector('.tb');
        }
    };
});
