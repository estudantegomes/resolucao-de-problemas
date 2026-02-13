"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Josephus = /** @class */ (function () {
    function Josephus(grupo) {
        this.grupo = grupo;
    }
    Josephus.prototype.getGrupo = function () {
        return this.grupo;
    };
    Josephus.prototype.sorteiaPessoa = function () {
        return Math.floor(Math.random() * this.grupo.length);
    };
    Josephus.prototype.ultimaPessoa = function () {
        var indiceAtual = this.sorteiaPessoa();
        var pessoaAtual = this.grupo[indiceAtual];
        var numero = pessoaAtual.getInteiro();
        console.log("Pessoa sorteada:\n".concat(pessoaAtual.toString()));
        while (this.grupo.length > 1) {
            var indiceEliminado = (indiceAtual + numero) % this.grupo.length;
            var pessoaEliminada = this.grupo[indiceEliminado];
            console.log("Removido: ".concat(pessoaEliminada.getNome()));
            this.grupo.splice(indiceEliminado, 1);
            if (this.grupo.length === 1) {
                break;
            }
            numero = pessoaEliminada.getInteiro();
            indiceAtual = indiceEliminado % this.grupo.length;
        }
        console.log("\n\nVencedor: ".concat(this.grupo[0].getNome()));
        return this.grupo;
    };
    return Josephus;
}());
exports.default = Josephus;
