"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Níckolas Gomes && Débora Annies
var Album = /** @class */ (function () {
    function Album(stickers) {
        this.stickers = this.bubleSort(stickers);
    }
    Album.prototype.getRepeated = function () {
        var repeated = [];
        for (var i = 0; i < this.stickers.length; i++) {
            if (this.stickers[i] == this.stickers[i + 1])
                repeated.push(this.stickers[i]);
        }
        return repeated;
    };
    Album.prototype.getWanted = function (others) {
        others = this.bubleSort(others);
        var wanted = [];
        for (var i = 0; i < others.length; i++) {
            var exist = false;
            for (var j = 0; j < this.stickers.length; j++) {
                if (others[i] == this.stickers[j])
                    exist = true;
            }
            if (!exist && others[i] != others[i - 1])
                wanted.push(others[i]);
        }
        return wanted;
    };
    Album.prototype.bubleSort = function (matriz) {
        var _a;
        var tam = matriz.length - 1;
        for (var i = 0; i < tam; i++) {
            var trocou = false;
            for (var j = 0; j < tam - i; j++) {
                if (matriz[j] > matriz[j + 1]) {
                    _a = [matriz[j + 1], matriz[j]], matriz[j] = _a[0], matriz[j + 1] = _a[1];
                    trocou = true;
                }
            }
            if (!trocou)
                break;
        }
        return matriz;
    };
    return Album;
}());
exports.default = Album;
