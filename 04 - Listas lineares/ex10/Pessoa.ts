export default class Pessoa{
    private nome: string;
    private inteiro: number;

    public constructor(nome: string, inteiro: number){
        this.nome = nome;
        this.inteiro = inteiro;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getInteiro(): number {
        return this.inteiro;
    }

    public setInteiro(inteiro: number): void {
        this.inteiro = inteiro;
    }

    public toString(): string{
        return `Nome: ${this.getNome()}\nNúmero: ${this.getInteiro()}`;
    }

}