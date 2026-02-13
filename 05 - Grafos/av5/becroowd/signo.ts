const fs = require("fs");
const data: string = fs.readFileSync(0, "utf8").trim();

function signo(data: string): string {
    const [dia, mes] = data.split('/').map(Number);
    const valor = mes * 100 + dia;

    if (valor >= 120 && valor <= 218) return 'aquario';
    if (valor >= 219 && valor <= 320) return 'peixes';
    if (valor >= 321 && valor <= 420) return 'aries';
    if (valor >= 421 && valor <= 520) return 'touro';
    if (valor >= 521 && valor <= 620) return 'gemeos';
    if (valor >= 621 && valor <= 722) return 'cancer';
    if (valor >= 723 && valor <= 822) return 'leao';
    if (valor >= 823 && valor <= 922) return 'virgem';
    if (valor >= 923 && valor <= 1022) return 'libra';
    if (valor >= 1023 && valor <= 1121) return 'escorpiao';
    if (valor >= 1122 && valor <= 1221) return 'sagitario';

    if (valor >= 1222 || valor <= 119) return 'capricornio';

    return 'Data invalida';
}

console.log(signo(data));
