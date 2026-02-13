export default class Matriz{
    readonly TAM: number = 5; 
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

    public soma(): number{
        return this.somaAUX(0);
    }

    private somaAUX(pos): number{
        if(pos > this.TAM)
            return 0;

        return this.matriz[pos] + this.somaAUX(pos+1);
    }
}