export default class Flofs {
    private queue: number[];

    public constructor(queue: number[]) {
        this.queue = this.bubleSort(queue);
    }

    public getUnpaired(): number[] {
        let matriz: number[] = [...this.queue];

        for (let i = 0; i < matriz.length; i++) {
            for (let j = i + 1; j < matriz.length; j++) {
                if (matriz[i] === matriz[j]) {
                    matriz.splice(j, 1); 
                    matriz.splice(i, 1); 
                    i = -1; 
                    break; 
                }
            }
        }
        return matriz;
    }


    private bubleSort(matriz: number[]): number[] {
    let tam: number = matriz.length - 1;

        for (let i = 0; i < tam; i++) {
            let trocou: boolean = false;

            for (let j = 0; j < tam - i; j++) {
                if (matriz[j] > matriz[j + 1]) {
                    [matriz[j], matriz[j + 1]] = [matriz[j + 1], matriz[j]];
                    trocou = true;
                }
            }

            if (!trocou) break;
        }

        return matriz;
    }

}
