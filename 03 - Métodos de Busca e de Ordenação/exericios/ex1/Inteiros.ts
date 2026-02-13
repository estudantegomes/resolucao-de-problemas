export default class Inteiros{
    private a: number;
    private b: number;
    private c: number;

    public constructor(a: number, b: number, c: number,){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public ordena(): number[]{
        let matriz: number[];
        let aux, a, b, c: number;
        
        a = this.a;
        b = this.b;
        c = this.c;

        if(a > b){
            aux = a;
            a = b;
            b = aux;
        }

        if(a > c){
            aux = a;
            a = c;
            c = aux;
        }

        if(b > c){
            aux = b;
            b = c;
            c = aux;
        }

        matriz = [a, b, c];
        return matriz;
    }
}