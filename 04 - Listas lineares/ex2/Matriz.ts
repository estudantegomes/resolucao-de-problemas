export default class Matriz{
    private matriz: number[] = [];

    public constructor(n: number){
        this.geraInteiros(n, this.matriz);
    }

    private geraInteiros(n: number, m: number[]): void{
        for(let i = 0; i < n; i++){
            m.push(Math.floor(Math.random()*1001));
        }
    }

    public toString(): string{
        let aux = '';
        for(let i = 0; i < this.matriz.length; i++){
            aux += this.matriz[i] + " ";
        }

        return aux;
    }
}