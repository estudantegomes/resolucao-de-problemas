export default class Fatorial{
    private n: number;

    public constructor(n: number){
        this.n = n;
    }

    public fatorial(): number{
        return this.fatorialAUX(this.n);
    }

    private fatorialAUX(x: number): number{
        if(x < 2)
            return 1;

        return x * this.fatorialAUX(x-1);
    }
}