export default class Solo{
    private n: number;

    public constructor(n: number){
        this.n = n;
    }

    private isPrimo(n: number): boolean{
        if (n <= 1)
            return false;

        if (n == 2 || n == 3 || n == 5 || n == 7)
            return true;

        if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0)
            return false;

        for (let i: number = 11; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0)
                return false;
        }

        return true;
    }

    private PrimeirosPrimos(n: number): number[]{
        let aux: number[] = [2]; 
        for(let i:number = 3; aux.length < n; i+=2){
            if(this.isPrimo(i))
                aux.push(i);
        }
        return aux;
    }

    public getNotes(): string[]{
        let notas: string[] = ['E', 'F#', 'G', 'A', 'B', 'C', 'D'];
        let solo: string[] = ['E'];
        let primos: number[] = this.PrimeirosPrimos(this.n);
        let aux: number = 0; 
            
        for(let i = 0; i < (primos.length - 1); i++){
            aux = (aux + primos[i]) % notas.length;
            solo.push(notas[aux]);
        }

        return solo;
    }
}
