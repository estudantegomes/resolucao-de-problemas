export default class Inversor{
    private palavra: string;

    public constructor(palavra: string){
        this.palavra = palavra;
    }

    public inverterSemRecursao(){
        let aux: string = '';
        for(let i = this.palavra.length - 1; i >= 0; i--){
            aux += this.palavra[i];
        }

        return aux;
    }

    public inverter(): string{
        return this.inverterAUX(this.palavra.length-1);
    }

    public inverterAUX(pos: number): string{
        if(pos >= 0)
            return '';
        
        let aux: string = this.palavra[pos];
        return aux + this.inverterAUX(pos-1);
    }

}
