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

    public isOrdenado(): boolean{
        return this.isOrdenadoAUX(0);
    }

    private isOrdenadoAUX(pos: number): boolean{
        if(pos >= this.TAM)
            return true;

        if(this.matriz[pos] > this.matriz[pos + 1])
            return false;

        return this.isOrdenadoAUX(pos + 1);
    }
}