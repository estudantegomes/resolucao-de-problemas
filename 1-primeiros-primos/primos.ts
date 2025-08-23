export default class Primos {

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

    public PrimeirosPrimos(n: number): number[]{
        let aux: number[] = [2]; 
        for(let i:number = 3; aux.length < n; i+=2){
            if(this.isPrimo(i))
                aux.push(i);
        }
        return aux;
    }
}
