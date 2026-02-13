export default class Inteiros{
    private a: number;
    private b: number;
    private c: number;

    public constructor(a: number, b: number, c: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public maior(): number{
        let a, b, c, aux: number;

        a = this.a;
        b = this.b;
        c = this.c;
        aux = a;

        if(b > a)
            aux = b;

        if(c > aux)
            aux = c;

        return aux;
    }
}