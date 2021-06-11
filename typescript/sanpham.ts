export class SanPham {
    private _id:number;
    private _ten:string;
    private _anh:string;
    private _mota:string;
    private _gia:number;
    private _tinhtrang:boolean;

    constructor(id:number,ten:string,anh:string,mota:string,gia:number,tinhtrang:boolean) {
        this.id = id;
        this.ten = ten;
        this.anh = anh;
        this.mota = mota;
        this.gia = gia;
        this.tinhtrang = tinhtrang;
    }
    
    public get id() : number {
        return this._id
    }
    
    public set id(v : number) {
        this._id = v;
    }

    
    public get ten() : string {
        return this._ten;
    }
    
    public set ten(v : string) {
        this._ten = v;
    }
    
    public get anh() : string {
        return this._anh;
    }
    
    public set anh(v : string) {
        this._anh = v;
    }
    
    public get mota() : string {
        return this._mota;
    }
    
    public set mota(v : string) {
        this._mota = v;
    }
    
    public get gia() : number {
        return this._gia;
    }
    
    public set gia(v : number) {
        this._gia = v;
    }
    
    public get tinhtrang() : boolean {
        return this._tinhtrang;
    }
    
    public set tinhtrang(v : boolean) {
        this._tinhtrang = v;
    }
    
    
};

    