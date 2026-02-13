export default class Expressao{
    private expressao: string;

    public constructor(expressao: string){
        this.expressao = expressao;
    }

    public estaBalanceada(): boolean{
        const abertura = ['{', '[', '('];
        const fechamento = ['}', '}', ')'];
        let aux = [];

        for(let i = 0; i < this.expressao.length; i++){
            for(let j = 0; j < abertura.length; j++){
                if(this.expressao[i] == abertura[j])
                    aux.push(this.expressao[i]);
            }
        }


        
    }
}