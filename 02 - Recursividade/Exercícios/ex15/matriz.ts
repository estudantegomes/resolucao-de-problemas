export default class Matriz{
    readonly TAM: number = 10; 
    private matriz: number[];

    public constructor(){
        this.matriz = [];

        for(let i = 0; i < this.TAM; i++){
            this.matriz[i] = Math.ceil(Math.random() * 10);
        }
    }

    public exibir(): string{
        return this.matriz.toString();
    }

    public ocorrencias(n: number):number{
        return this.ocorrenciasAUX(n, 0);
    }

    private ocorrenciasAUX(x: number, pos): number{
        if(pos >= this.TAM)
            return 0;

        let aux = 0;

        if(this.matriz[pos] == x)
            aux += 1;

        return aux + this.ocorrenciasAUX(x, pos + 1);
    }
}