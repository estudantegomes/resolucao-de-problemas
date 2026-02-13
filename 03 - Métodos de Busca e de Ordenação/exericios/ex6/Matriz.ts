export default class MatrizInteira {
    private m: number[];

    constructor(matriz: number[]) {
        this.m = [...matriz]; 
    }

    public embaralha(): number[]{
        let tam = this.m.length;

        for(let i = 0; i < tam; i++){
            let aux = Math.floor(Math.random()*tam);
            [this.m[i], this.m[aux]] = [this.m[aux], this.m[i]];
        }

        return this.m;
    }

    public embaralhaFisherYates(): number[]{
        let tam = this.m.length;

        for(let i = tam - 1; i > 0; i--){
            let aux = Math.floor(Math.random() * (i + 1));
            [this.m[i], this.m[aux]] = [this.m[aux], this.m[i]]
        }

        return this.m;
    }


}