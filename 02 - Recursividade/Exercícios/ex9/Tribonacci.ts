export default class Tribonacci{
    private n: number;

    public constructor(n: number){
        this.n = n;
    }

    public tribonacci(): number{
        return this.tribonacciAUX(this.n);
    }

     private tribonacciAUX(x: number): number{
        if(x <= 0)
            return -1;

        if(x == 1)
            return 0;

        if(x < 4)
            return 1;
        
        return this.tribonacciAUX(x-1) + this.tribonacciAUX(x-2) + this.tribonacciAUX(x-3);
    }
}