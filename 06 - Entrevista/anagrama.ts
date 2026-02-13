export default class Anagrama {
  private palavra: string;

  public constructor(palavra: string) {
    this.palavra = palavra;
  }

  public isAnagrama(palavra: string): boolean {
    let aux: boolean = false;
    let cont: number = 0;

    for (let i = 0; i <= this.palavra.length - 1; i++) {
      for (let j = 0; j < palavra.length; j++) {
        if (this.palavra[i] == palavra[j]) {
          palavra = palavra.replace(this.palavra[i], "");
          cont++;
          break;
        }
      }
    }

    if (cont == this.palavra.length && palavra.length == 0) {
      aux = true;
    }

    return aux;
  }
}

let p = new Anagrama("casa");
console.log(p.isAnagrama("saca"));

let p2 = new Anagrama("2221");
console.log(p2.isAnagrama("1112"));
