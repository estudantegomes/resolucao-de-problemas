export default class Lugar {
  private arvore = new Map<string, string[]>();

  public constructor(continente: string, pais: string, cidade: string) {
    this.arvore.set("continente", [continente]);
    this.arvore.set(continente, [pais]);
    this.arvore.set(pais, [cidade]);
  }

  // === CONTINENTES ===
  public exibeContinentes(): void {
    console.log(this.arvore.get("continente"));
  }

  public adicionaContinente(continente: string): void {
    this.arvore.get("continente")?.push(continente);
    this.arvore.set(continente, []);
  }

  // === PAÍSES ===
  public exibePaises(chave: string): void {
    console.log(this.arvore.get(chave));
  }

  public adicionaPais(chave: string, pais: string): void {
    this.arvore.get(chave)?.push(pais);
    this.arvore.set(pais, []);
  }

  // === CIDADES ===
  public exibeCidades(chave: string): void {
    console.log(this.arvore.get(chave));
  }

  public adicionaCidade(chave: string, cidade: string): void {
    this.arvore.get(chave)?.push(cidade);
  }

  public toString(): string {
    let aux: string = "";

    let continentes = this.arvore.get("continente");
    if (!continentes) 
      return "Nenhum continente cadastrado";

    for (let continente of continentes) {
      aux += `${continente}\n`;

      let paises = this.arvore.get(continente);
      if (paises) {
        for (let pais of paises) {
          aux += ` - ${pais}\n`;

          let cidades = this.arvore.get(pais);
          if (cidades) {
            for (let cidade of cidades) {
              aux += `   - ${cidade}\n`;
            }
          }
        }
      }
    }

    return aux;
  }
}
