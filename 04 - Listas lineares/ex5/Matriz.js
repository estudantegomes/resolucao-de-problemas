"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Matriz = /** @class */ (function () {
    function Matriz(n) {
        this.matriz = [];
        this.geraInteiros(n, this.matriz);
    }
    Matriz.prototype.geraInteiros = function (n, m) {
        for (var i = 0; i < n; i++) {
            m.push(Math.floor(Math.random() * 101));
        }
        this.bubleSort(this.matriz);
    };
    Matriz.prototype.getCorte = function (n) {
        while (this.matriz[0] < n) {
            this.matriz.splice(0, 1);
        }
        return this.matriz;
    };
    Matriz.prototype.getRemoveMultiplos = function (n) {
        var aux = this.matriz.length - 1;
        if (n <= 0)
            return this.matriz;
        for (var i = aux; i > 0; i--) {
            if ((i + 1) % n == 0) {
                this.matriz.splice(i, 1);
            }
        }
        return this.matriz;
    };
    Matriz.prototype.calculaMedia = function () {
        var soma = 0;
        for (var i = 0; i < this.matriz.length; i++) {
            soma += this.matriz[i];
        }
        var media = soma / this.matriz.length;
        return media;
    };
    Matriz.prototype.maisPróximoDaMédia = function () {
        var media = this.calculaMedia();
        var inicio = 0;
        var fim = this.matriz.length - 1;
        var maisProximo = this.matriz[0];
        while (inicio <= fim) {
            var meio = Math.floor((inicio + fim) / 2);
            if (Math.abs(this.matriz[meio] - media) < Math.abs(maisProximo - media)) {
                maisProximo = this.matriz[meio];
            }
            if (media < this.matriz[meio]) {
                fim = meio - 1;
            }
            else if (media > this.matriz[meio]) {
                inicio = meio + 1;
            }
            else {
                return this.matriz[meio];
            }
        }
        return maisProximo;
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
