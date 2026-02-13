"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, inteiro) {
        this.nome = nome;
        this.inteiro = inteiro;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getInteiro = function () {
        return this.inteiro;
    };
    Pessoa.prototype.setInteiro = function (inteiro) {
        this.inteiro = inteiro;
    };
    Pessoa.prototype.toString = function () {
        return "Nome: ".concat(this.getNome(), "\nN\u00FAmero: ").concat(this.getInteiro());
    };
    return Pessoa;
}());
exports.default = Pessoa;
