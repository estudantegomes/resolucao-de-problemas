export default class Matriz {
  private matriz: number[] = [];

  public constructor(n: number) {
    this.geraInteiros(n, this.matriz);
  }

  private geraInteiros(n: number, m: number[]): void {
    for (let i = 0; i < n; i++) {
      m.push(Math.floor(Math.random() * 11));
    }

    this.bubleSort(this.matriz);
  }

  public getCorte(n: number): number[] {
    while (this.matriz[0] < n) {
      this.matriz.splice(0, 1);
    }

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
