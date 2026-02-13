"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matriz = /** @class */ (function () {
    function Matriz(n) {
        this.matriz = [];
        this.geraInteiros(n, this.matriz);
    }
    Matriz.prototype.geraInteiros = function (n, m) {
        for (var i = 0; i < n; i++) {
            m.push(Math.floor(Math.random() * 1001));
        }
    };
    Matriz.prototype.toString = function () {
        var aux = '';
        for (var i = 0; i < this.matriz.length; i++) {
            aux += this.matriz[i] + " ";
        }
        return aux;
    };
    return Matriz;
}());
exports.default = Matriz;
