//Alunos: Níckolas Gomes & Débora Annies
export default class Palindrome{
    private word: string;

    public constructor(word: string){
        this.word = word;
    }

    public isPalindrome():boolean{
        let aux = this.inverterAUX(this.word.length-1);       
        return(aux == this.word);
    }

    private inverterAUX(pos: number): string{
        if(pos < 0)
            return '';
        
        let aux: string = this.word[pos];
        return aux + this.inverterAUX(pos-1);
    }
}