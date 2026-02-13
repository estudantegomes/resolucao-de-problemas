export default class Matriz{
    readonly TAM: number = 20; 
    private matriz: number[];

    public constructor(){
        //this.matriz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.matriz = [];
        for(let i = 0; i < this.TAM; i++){
            this.matriz[i] = Math.ceil(Math.random() * 999);
        }
    }

    public exibir(): string{
        return this.matriz.toString();
    }

    public maior(): number{
        return this.maiorAUX(0);
    }

    private maiorAUX(pos){
        if(pos == this.TAM-1)
            return this.matriz[pos];

        let maior: number = this.maiorAUX(pos+1);
        if(this.matriz[pos] > maior)
            return this.matriz[pos];

        return maior;
    }
}