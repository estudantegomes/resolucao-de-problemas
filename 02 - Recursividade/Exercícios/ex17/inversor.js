"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inversor = /** @class */ (function () {
    function Inversor(palavra) {
        this.palavra = palavra;
    }
    Inversor.prototype.inverterSemRecursao = function () {
        var aux = '';
        for (var i = this.palavra.length - 1; i >= 0; i--) {
            aux += this.palavra[i];
        }
        return aux;
    };
    Inversor.prototype.inverter = function () {
        return this.inverterAUX(this.palavra.length - 1);
    };
    Inversor.prototype.inverterAUX = function (pos) {
        if (pos >= 0)
            return '';
        var aux = this.palavra[pos];
        return aux + this.inverterAUX(pos - 1);
    };
    return Inversor;
}());
exports.default = Inversor;
