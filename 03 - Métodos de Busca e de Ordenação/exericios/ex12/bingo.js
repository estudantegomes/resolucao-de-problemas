"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bingo = /** @class */ (function () {
    function Bingo() {
        this.cartela = [];
        this.geraCartela(this.cartela);
    }
    Bingo.prototype.geraCartela = function (matriz) {
        while (matriz.length < 25) {
            var aux = Math.floor(Math.random() * 51);
            var exist = false;
            for (var i = 0; i < matriz.length; i++) {
                if (matriz[i] == aux) {
                    exist = true;
                    break;
                }
            }
            if (!exist)
                matriz.push(aux);
        }
        return matriz;
    };
    Bingo.prototype.toString = function () {
        var aux = 'B  I  N  G  O\n';
        for (var i = 0; i < this.cartela.length; i++) {
            if (i % 5 === 0 && i !== 0)
                aux += '\n';
            aux += this.cartela[i].toString().padEnd(2, ' ') + ' ';
        }
        return aux;
    };
    return Bingo;
}());
exports.default = Bingo;
