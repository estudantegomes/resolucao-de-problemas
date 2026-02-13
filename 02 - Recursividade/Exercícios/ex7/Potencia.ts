export default class Protencia{
    private base: number;
    private expoente: number;

    public constructor(base: number, expoente: number){
        this. base = base;
        this.expoente = expoente;
    }

    public potencia(): number{
        return this.potenciaAUX(this.base, this.expoente);
    }

    private potenciaAUX(b: number, e: number): number{
        if(e == 0)
            return 1;

        if(e < 2)
            return b;

        return b * this.potenciaAUX(e, b-1)
    }
}