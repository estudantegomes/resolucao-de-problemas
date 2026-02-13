"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Album_1 = require("./Album");
var sheldon = new Album_1.default([3, 6, 9, 6, 12, 3, 6]);
console.log(sheldon.getRepeated());
console.log(sheldon.getWanted([3, 6, 4, 12, 8, 4]));
