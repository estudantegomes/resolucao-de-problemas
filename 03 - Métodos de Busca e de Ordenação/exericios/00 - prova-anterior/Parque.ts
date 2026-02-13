export default class Parque {
    matriz: number[] = []
    constructor(matriz: number[]) {
        this.matriz = matriz

    }

    getEmOrdem(): number[] {
        let ordenada = [...this.matriz];
        let tam = ordenada.length;

        for (let i = 0; i < tam; i++) {
            if (ordenada[i] == -1) {
                continue;

            } else {

                for (let j = 0; j + 1 < tam; j++) {
                    if(ordenada[j] == -1)
                        continue;

                    if (ordenada[i] <= ordenada[j])
                        [ordenada[i], ordenada[j]] = [ordenada[j], ordenada[i]];

                }
            }

        }
        return ordenada;
    }
}
