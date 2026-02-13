//Níckolas Gomes && Débora Annies
export default class Album {
  private stickers: number[];

  public constructor(stickers: number[]) {
    this.stickers = this.bubleSort(stickers);
  }

  public getRepeated(): number[] {
    let repeated: number[] = [];

    for (let i = 0; i < this.stickers.length; i++) {
      if (this.stickers[i] == this.stickers[i + 1])
        repeated.push(this.stickers[i]);
    }

    return repeated;
  }

  public getWanted(others: number[]): number[] {
    others = this.bubleSort(others);
    let wanted: number[] = [];

    for (let i = 0; i < others.length; i++) {
      let exist: boolean = false;

      for (let j = 0; j < this.stickers.length; j++) {
        if (others[i] == this.stickers[j]) 
            exist = true;
      }

      if (!exist && (i === 0 || others[i] != others[i - 1])) 
        wanted.push(others[i]);
    }

    return wanted;
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
}
