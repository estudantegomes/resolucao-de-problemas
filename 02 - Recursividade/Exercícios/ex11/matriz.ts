export default class Matriz{
    readonly TAM: number = 20; 
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

    public primeiraOcorrencia(x: number): number{
        return this.primeiraOcorrenciaAUX(x, 0);
    }

    private primeiraOcorrenciaAUX(y: number, pos: number): number{
        if(pos > this.TAM)
            return -1;

        if(this.matriz[pos] == y)
            return pos;

        return this.primeiraOcorrenciaAUX(y, pos + 1);
    }
}