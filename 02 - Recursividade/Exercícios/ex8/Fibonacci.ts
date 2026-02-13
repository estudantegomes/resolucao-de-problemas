export default class Fibonacci{
    private n: number;

    public constructor(n: number){
        this.n = n;
    }

    public fibonacci(): number{
        return this.fibonacciAUX(this.n);
    }

    private fibonacciAUX(x: number): number{
        if(x <= 0)
            return -1;

        if(x == 1)
            return 0;

        if(x < 4)
            return 1;

        return this.fibonacciAUX(x-1) + this.fibonacciAUX(x-2);
    }
}