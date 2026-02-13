export default class Matriz {
  private matriz: number[] = [];

  public constructor(n: number) {
    this.geraInteiros(n, this.matriz);
  }

  private geraInteiros(n: number, m: number[]): void {
    for (let i = 0; i < n; i++) {
      m.push(Math.floor(Math.random() * 101));
    }

    this.bubleSort(this.matriz);
  }

  public getCorte(n: number): number[] {
    while (this.matriz[0] < n) {
      this.matriz.splice(0, 1);
    }

    return this.matriz;
  }

  public getRemoveMultiplos(n: number): number[] {
    let aux = this.matriz.length - 1;

    if (n <= 0) return this.matriz;

    for (let i = aux; i > 0; i--) {
      if ((i + 1) % n == 0) {
        this.matriz.splice(i, 1);
      }
    }

    return this.matriz;
  }

  public calculaMedia(): number {
    let soma: number = 0;

    for (let i = 0; i < this.matriz.length; i++) {
      soma += this.matriz[i];
    }

    let media = soma / this.matriz.length;

    return media;
  }

  public maisPróximoDaMédia(): number {
    let inicio = 0;
    let fim = this.matriz.length - 1;
    let media = this.calculaMedia();
    let maisProximo: number = this.matriz[0];

    while (inicio <= fim) {
      const meio = Math.floor((inicio + fim) / 2);

      if (Math.abs(this.matriz[meio] - media) < Math.abs(maisProximo - media)) {
        maisProximo = this.matriz[meio];
      }

      if (media < this.matriz[meio]) {
        fim = meio - 1;
      } else if (media > this.matriz[meio]) {
        inicio = meio + 1;
      } else {
        return this.matriz[meio];
      }
    }
    return maisProximo;
  }

  public reduz(n: number): number[]{
    this.matriz.splice(n-1, this.matriz.length - n);

    return this.matriz;
  }

  public fatia(inicio: number, fim: number): number[]{
    let fatia: number[] = [];

    for(let i = 0; i < this.matriz.length; i++){
        if(this.matriz[i] >= inicio && this.matriz[i] <= fim)
            fatia.push(this.matriz[i]);
    }

    this.matriz = fatia;
    return this.matriz;
  }

  public inverte(): number[]{
    let invertida: number[] = [];

    for(let i = this.matriz.length - 1; i >= 0; i--){
        invertida.push(this.matriz[i]);
    }

    this.matriz = invertida;
    return this.matriz;
  }

  private bubleSort(matriz: number[]): number[] {
    let tam: number = matriz.length - 1;

    for (let i = 0; i < tam; i++) {
      let trocou: boolean = false;

      for (let j = 0; j < tam - i; j++) {
        if (matriz[j] > matriz[j + 1]) {
          [matriz[j], matriz[j + 1]] = [matriz[j + 1], matriz[j]];
          trocou = true;
        }
      }

      if (!trocou) break;
    }

    return matriz;
  }

  public toString(): string {
    let aux = "";
    for (let i = 0; i < this.matriz.length; i++) {
      aux += this.matriz[i] + " ";
    }

    return aux;
  }
}
