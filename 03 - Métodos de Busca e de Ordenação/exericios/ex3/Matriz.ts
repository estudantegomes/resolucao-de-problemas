export default class MatrizInteira {
    private m: number[];

    constructor(matriz: number[]) {
        this.m = [...matriz]; 
    }

    public selectionSort(): number[] {
        let ordenada: number[] = [...this.m];
        let tam: number = ordenada.length-1;
        let cont: number = 0;

        for (let i = 0; i < tam; i++) {
            let min = i;

            for (let j = i + 1; j <= tam; j++) {
                if (ordenada[j] < ordenada[min]) {
                    min = j;
                }
            }

            if (min !== i) {
                [ordenada[i], ordenada[min]] = [ordenada[min], ordenada[i]];
                cont++;

            }
        }

        console.log(`\nNúmero de trocas: ${cont}\n`);
        return ordenada;
    }

    public bubleSort(): number[] {
        let ordenada: number[] = [...this.m];
        let tam: number = ordenada.length-1;
        let cont: number = 0;

        for (let i = 0; i < tam; i++) {
            let trocou: boolean = false;

            for (let j = 0; j < tam-i; j++) {
                if (ordenada[j] > ordenada[j+1]) {
                    [ordenada[j], ordenada[j+1]] = [ordenada[j+1], ordenada[j]];
                    
                    trocou = true;
                    cont++;
                }
            }

            if(!trocou)
                break;
        }

        console.log(`\nNúmero de trocas: ${cont}\n`);
        return ordenada;
    }

    public insertionSort(): number[]{
        let ordenada: number[] = [...this.m];
        let tam: number = ordenada.length-1;
        let cont: number = 0;

        for(let i = 0; i < tam; i++){
            if(ordenada[i] > ordenada[i+1]){
                let aux = ordenada[i+1];
                ordenada[i+1] = ordenada[i];
                ordenada[i] = aux;
                cont++;

                let j = i - 1;
                while(j >= 0){
                    if(aux < ordenada[j]){
                        ordenada[j + 1] = ordenada[j];
                        ordenada[j] = aux;
                        cont++;
                    } else {
                        break;
                    }

                    j = j - 1;
                }
            }
        }

        console.log(`\nNúmero de trocas: ${cont}\n`);
        return ordenada;
    }

}