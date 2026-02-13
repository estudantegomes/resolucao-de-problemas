"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matriz = /** @class */ (function () {
    function Matriz(n) {
        this.matriz = [];
        this.geraInteiros(n, this.matriz);
    }
    Matriz.prototype.geraInteiros = function (n, m) {
        for (var i = 0; i < n; i++) {
            m.push(Math.floor(Math.random() * 11));
        }
        this.bubleSort(this.matriz);
    };
    Matriz.prototype.getCorte = function (n) {
        while (this.matriz[0] < n) {
            this.matriz.splice(0, 1);
        }
        return this.matriz;
    };
    Matriz.prototype.bubleSort = function (matriz) {
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
    Matriz.prototype.toString = function () {
        var aux = "";
        for (var i = 0; i < this.matriz.length; i++) {
            aux += this.matriz[i] + " ";
        }
        return aux;
    };
    return Matriz;
}());
exports.default = Matriz;
