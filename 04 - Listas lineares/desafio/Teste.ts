import Album from "./Album";

let sheldon = new Album([3, 6, 9, 6, 12, 3, 6]);
console.log(sheldon.getRepeated());

console.log(sheldon.getWanted([3, 6, 4, 12, 8, 4]));