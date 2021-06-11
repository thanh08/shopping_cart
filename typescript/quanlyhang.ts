/// <reference path="sanpham.ts" />
import {SanPham} from "./sanpham.js"
export class QuanLyHang {
    private hang:SanPham[] = [];
    constructor(){
        var sanpham1 = new SanPham(1,'Tủ lạnh','images/2.jpg','Tủ lạnh đến từ Samsung',5000000,true);
        this.addSanPham(sanpham1);
        var sanpham2 = new SanPham(2,'Tủ lạnh mini','images/3.jpg','Tủ lạnh đến từ Beko',1000000,true);
        this.addSanPham(sanpham2);
        var sanpham2 = new SanPham(3,'Ghế xoay','images/1.jpg','Ghế xoay đến từ Platic',250000,true);
        this.addSanPham(sanpham2);
    }
    getCacSanPham() :SanPham[]{
        return this.hang;
    }
    getSanPhambyId(idsanpham:number):any {
        for (var i = 0; i < this.hang.length; i++) {
            if (this.hang[i].id == idsanpham) {
                return this.hang[i];
            }
            
        }

    }
    addSanPham(sp:SanPham):void{
        this.hang.push(sp);//dùng hàm push để đẩy dữ liệu vào mảng
    }
    showSanPham():string{
        //show các sp html 
        var danhsachHTML='';
        if (this.hang.length != 0) {
            for (var i = 0; i < this.hang.length; i++) {
                danhsachHTML += `
                <div class="col-sm-4"
            <div class="card" id-${this.hang[i].id}>
                  <img class="card-img-top" src="${this.hang[i].anh}" alt="">
                  <div class="card-body">
                    <h4 class="card-title">${this.hang[i].ten}</h4>
                    <p class="card-text">${this.hang[i].mota}</p>
                    <div class="giasanphamkhac">${this.hang[i].gia}</div>`

                    if (this.hang[i].tinhtrang = false) {
                        danhsachHTML += `<button type="button" class="btn btn-info disabled" >Hết hàng</button`
                    } else {
                        danhsachHTML += `<button type="button" class="btn btn-info muangay " id-sp="${this.hang[i].id}" >Mua hàng</button`
                        
                    }
                    
                  danhsachHTML += `</div>
                </div>
                </div>
                `
            }     
                   return danhsachHTML;

            

        } else {
            return 'sanphamdangdccapnhat'
        }
    }
    

}