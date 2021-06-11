import {SanPham} from"./sanpham.js";
import {SanPhamGioHang} from "./sanphamgiohang";
export class Quanlysanphamgiohang {
    private cacsanphamtronggiohang :SanPhamGioHang [] = [];
    public xemgiohang():SanPhamGioHang[]{
        return this.cacsanphamtronggiohang;
    }
    tangthemsoluongsanpham(motsanpham:SanPham):void{
        var chiso:number = this.checksptruockhithem(motsanpham);
        var soluonghientai = this.cacsanphamtronggiohang[chiso].laysoluong();
        soluonghientai = soluonghientai + 1;
        this.cacsanphamtronggiohang[chiso].thaydoisoluong(soluonghientai);
    }
    themsanphamgiohang(motsanpham:SanPhamGioHang):void{
        this.cacsanphamtronggiohang.push(motsanpham);

    }
    checksptruockhithem(motsanpham:SanPham){
        for (var i:number = 0; i < this.cacsanphamtronggiohang.length; i++) {
            if(this.cacsanphamtronggiohang[i].laySanpham().id == motsanpham.id){
                return i;
            }
            
        }
        return -1;
        
    }
    updatesanpham(motsanpham:SanPham,soluong:number):void{
          for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
           if(this.cacsanphamtronggiohang[i].laySanpham().id == motsanpham.id){
             //cập nhật lại số lượng vào trong mảng
             this.cacsanphamtronggiohang[i].thaydoisoluong(soluong);
           }            
          }
    }
    xoasanpham(motsanpham:SanPham):void{
      for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
        if (this.cacsanphamtronggiohang[i].laySanpham().id == motsanpham.id ) {

          this.cacsanphamtronggiohang.splice(i,1);
          
           
        }          
      }
    }
    tinhsoluong():number{
        var soluongsp = 0;
        for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
            soluongsp += this.cacsanphamtronggiohang[i].laysoluong();
            
        }
        return soluongsp;
    }
    tinhgia():number{
      var tongcong = 0;
      for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
        var gia = this.cacsanphamtronggiohang[i].laySanpham().gia;
        var soluong = this.cacsanphamtronggiohang[i].laysoluong();
        var gia1sp = gia*soluong;
        tongcong +=gia1sp;

        
      }
        return tongcong;
    }
    hienthigiohang():string{
        var giohangHTML = "";
        for (var i = 0; i < this.cacsanphamtronggiohang.length; i++) {
            giohangHTML += `
            <div class="sanphamdcchon" id-${this.cacsanphamtronggiohang[i].laySanpham().id}>
              <div class="phan1-1">
             <img src="${this.cacsanphamtronggiohang[i].laySanpham().anh}" alt="" srcset="">
              </div>
              <div class="phan1-2">
                <div class="tex1">${this.cacsanphamtronggiohang[i].laySanpham().ten}</div>
                <div class="text2">
                  <button type="button" class="btn btn-info xoasp" data-idxoasp ="${this.cacsanphamtronggiohang[i].laySanpham().id}" >Xóa</button>
                </div>
              </div>
              <div class="phan1-3">
                <div class="textgia">${this.cacsanphamtronggiohang[i].laySanpham().gia}
                </div>
                <div class="textgiamgia">600.000đ | -13%

                </div>
              </div>
              <div class="phan1-4">
                <form>
                  <input type="number" name="" class="osoluong" id="" data-idsp="${this.cacsanphamtronggiohang[i].laySanpham().id}" value="${this.cacsanphamtronggiohang[i].laysoluong()}" min="1">
                </form>
              </div>
            </div>
            `
        }
        return giohangHTML;
    }

}