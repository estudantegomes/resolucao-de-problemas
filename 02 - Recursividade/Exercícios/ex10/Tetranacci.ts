export default class Tetranacci{
    private n: number;

    public constructor(n: number){
        this.n = n;
    }

    public tetranacci(): number{
        return this.tetranacciAUX(this.n);
    }

    private tetranacciAUX(x: number): number{
        if(x <= 0)
            return -1;

        if(x == 1)
            return 0;

        if(x < 4)
            return 1;
        
        if(x == 4)
            return 2;

        return this.tetranacciAUX(x-1) +  this.tetranacciAUX(x-2) + this.tetranacciAUX(x-3) + this.tetranacciAUX(x-4)
    }
}