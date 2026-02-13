"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Flofs = /** @class */ (function () {
    function Flofs(queue) {
        this.queue = this.bubleSort(queue);
    }
    Flofs.prototype.getUnpaired = function () {
        var matriz = __spreadArray([], this.queue, true);
        for (var i = 0; i < matriz.length; i++) {
            for (var j = i + 1; j < matriz.length; j++) {
                if (matriz[i] === matriz[j]) {
                    matriz.splice(j, 1);
                    matriz.splice(i, 1);
                    i = -1;
                    break;
                }
            }
        }
        return matriz;
    };
    Flofs.prototype.bubleSort = function (matriz) {
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
    return Flofs;
}());
exports.default = Flofs;
