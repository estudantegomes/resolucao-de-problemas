export default class Bingo{
    private cartela: number[] = [];

    public constructor(){
        this.geraCartela(this.cartela);
    }

    private geraCartela(matriz: number[]): number[]{

        while(matriz.length < 25){
            let aux = Math.floor(Math.random()*51);
            let exist = false;

            for(let i = 0; i < matriz.length; i++){
                if(matriz[i] == aux){
                    exist = true;
                    break;
                }
            }

            if(!exist)
                matriz.push(aux);

        }

        return matriz;
    }

    public toString(): string{
        let aux = 'B  I  N  G  O\n';
        for (let i = 0; i < this.cartela.length; i++) {
            if (i % 5 === 0 && i !== 0) 
                aux += '\n';

            aux += this.cartela[i].toString().padEnd(2, ' ') + ' ';
        }
        return aux;
    }
}