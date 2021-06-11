import{SanPham} from "./sanpham";
import {QuanLyHang} from "./quanlyhang.js";
import {Quanlysanphamgiohang} from "./quanlysanphamgiohang.js";
import {SanPhamGioHang} from "./sanphamgiohang.js";
var tatcasp = new QuanLyHang();
var giohang = new Quanlysanphamgiohang();
//xuat ra html các san pham
var divcacsphamkhac = document.getElementById('spkhac');
divcacsphamkhac.innerHTML = tatcasp.showSanPham();
//xuat ra html trên phân gio hang thi chon sp
var nutmuangay = document.querySelectorAll('.muangay');
var divcacspgiohang = document.getElementById('spgiohang');
divcacspgiohang.classList.remove('phan1');
var divsoluongspgiohang = document.querySelector('.giohang span');
var divgiatamtinh = document.querySelector('.textgiaphan2 .gia');
var divgiacuoi = document.querySelector('.giacuoi')

for (var i = 0; i < nutmuangay.length; i++) {
    nutmuangay[i].addEventListener('click',function(){

     var idlayduoc:number=this.getAttribute('id-sp');
     if (tatcasp.getSanPhambyId(idlayduoc) == 0) {
         console.log('loi du lieu');
     }
     else{
         //check nếu chưa có sp trong giỏ hàng thì thêm vào
         //còn nếu có rồi thì tăng số lượng lên
         divcacspgiohang.classList.add('phan1');

     var splayduoc:SanPham = tatcasp.getSanPhambyId(idlayduoc);
     if (giohang.checksptruockhithem(splayduoc) == -1) {
         var spduochuyendoisptronggiohang:SanPhamGioHang = new SanPhamGioHang(splayduoc,1);
         giohang.themsanphamgiohang(spduochuyendoisptronggiohang);


         thongbao('<div class="alert alert-success" role="alert"> <i class="far fa-check-square"></i><span> Bạn đã thêm sản phẩm vào giỏ hàng thành công!</span></div>')
        


     } else {
         giohang.tangthemsoluongsanpham(splayduoc);
         
         
     }
     
     //hiện thị sp trên giỏ hàng push html ra
        divcacspgiohang.innerHTML = giohang.hienthigiohang();
        //hiện thị số sp trong gio hàng
        divsoluongspgiohang.innerHTML= '( '+giohang.tinhsoluong() + ' sản phẩm )';
        //hiện thị giá trong gio hàng
        divgiatamtinh.innerHTML = giohang.tinhgia() + 'đ';
        divgiacuoi.innerHTML = giohang.tinhgia() + 'đ';

        //cập nhật giá khi thay đổi số lượng
        var osoluong = document.getElementsByClassName('osoluong');
        for (var i = 0; i < osoluong.length; i++) {
             
                
                osoluong[i].addEventListener('change',function(){
                var idsanpham:any = this.getAttribute('data-idsp');
                var sanphamlayduoc = tatcasp.getSanPhambyId(idsanpham);
                var soluongsp = parseInt(this.value);
                giohang.updatesanpham(sanphamlayduoc,soluongsp);

                divsoluongspgiohang.innerHTML= '( '+giohang.tinhsoluong() + ' sản phẩm )';
                divgiatamtinh.innerHTML = giohang.tinhgia() + 'đ';
                divgiacuoi.innerHTML = giohang.tinhgia() + 'đ';
                thongbao('<div class="alert alert-info" role="alert"> <i class="far fa-check-square"></i><span> Bạn đã cập nhật lại sản phẩm trong giỏ hàng thành công!</span></div>')


            })
            
        }

//xóa sp

 xoa();






     }

    })    
     
}
function xoa(){
var nutxoa = document.querySelectorAll('.xoasp');
for (var i = 0; i < nutxoa.length; i++) {
nutxoa[i].addEventListener('click',function(){
var idsanpham:any = this.getAttribute('data-idxoasp');
var sanphamlayduoc:SanPham = tatcasp.getSanPhambyId(idsanpham);
console.log(sanphamlayduoc);
giohang.xoasanpham(sanphamlayduoc);
divcacspgiohang.innerHTML = giohang.hienthigiohang();
//hiện thị số sp trong gio hàng
divsoluongspgiohang.innerHTML= '( '+giohang.tinhsoluong() + ' sản phẩm )';
//hiện thị giá trong gio hàng
divgiatamtinh.innerHTML = giohang.tinhgia() + 'đ';
divgiacuoi.innerHTML = giohang.tinhgia() + 'đ';
console.log(giohang.xemgiohang());


})
}}



var thongbaospgiohang = document.querySelector('.tb');
function thongbao(noidung:string):void {
    
    thongbaospgiohang.innerHTML = noidung;

}


