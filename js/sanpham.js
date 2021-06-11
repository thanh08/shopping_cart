System.register([], function (exports_1, context_1) {
    "use strict";
    var SanPham;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SanPham = /** @class */ (function () {
                function SanPham(id, ten, anh, mota, gia, tinhtrang) {
                    this.id = id;
                    this.ten = ten;
                    this.anh = anh;
                    this.mota = mota;
                    this.gia = gia;
                    this.tinhtrang = tinhtrang;
                }
                Object.defineProperty(SanPham.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    set: function (v) {
                        this._id = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "ten", {
                    get: function () {
                        return this._ten;
                    },
                    set: function (v) {
                        this._ten = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "anh", {
                    get: function () {
                        return this._anh;
                    },
                    set: function (v) {
                        this._anh = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "mota", {
                    get: function () {
                        return this._mota;
                    },
                    set: function (v) {
                        this._mota = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "gia", {
                    get: function () {
                        return this._gia;
                    },
                    set: function (v) {
                        this._gia = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SanPham.prototype, "tinhtrang", {
                    get: function () {
                        return this._tinhtrang;
                    },
                    set: function (v) {
                        this._tinhtrang = v;
                    },
                    enumerable: false,
                    configurable: true
                });
                return SanPham;
            }());
            exports_1("SanPham", SanPham);
            ;
        }
    };
});
