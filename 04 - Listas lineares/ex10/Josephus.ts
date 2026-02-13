import Pessoa from "./Pessoa";

export default class Josephus {
  private grupo: Pessoa[];

  public constructor(grupo: Pessoa[]) {
    this.grupo = grupo;
  }

  public getGrupo(): Pessoa[] {
    return this.grupo;
  }

  private sorteiaPessoa(): number {
    return Math.floor(Math.random() * this.grupo.length);
  }

  public ultimaPessoa(): Pessoa[] {
    let indiceAtual = this.sorteiaPessoa();
    let pessoaAtual = this.grupo[indiceAtual];
    let numero = pessoaAtual.getInteiro();

    console.log(`Pessoa sorteada:\n${pessoaAtual.toString()}`);

    while (this.grupo.length > 1) {
      let indiceEliminado = (indiceAtual + numero) % this.grupo.length;

      let pessoaEliminada = this.grupo[indiceEliminado];
      console.log(`Removido: ${pessoaEliminada.getNome()}`);

      this.grupo.splice(indiceEliminado, 1);

      if (this.grupo.length === 1) {
        break;
      }

      numero = pessoaEliminada.getInteiro();

      indiceAtual = indiceEliminado % this.grupo.length;
    }

    console.log(`\n\nVencedor: ${this.grupo[0].getNome()}`);
    return this.grupo;
  }
}
