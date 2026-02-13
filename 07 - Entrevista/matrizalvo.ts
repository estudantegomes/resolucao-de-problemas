export default class Matriz {
  private m: number[][];

  public constructor(n: number) {
    this.m = this.popula(n);
  }

  public getMatriz(): number[][]{
    return this.m;
  }

  private popula(n: number): number[][] {
    if (n <= 0) {
      return [];
    }

    let matriz: number[][] = [];
    
    for (let i = 0; i < n; i++) {
      matriz[i] = [];
    }

    for (let i = 0; i < n; i++) {
      // i é a linha
      for (let j = 0; j < n; j++) {
        // j é a coluna

        const distSuperior = i;
        const distInferior = n - 1 - i;
        const distEsquerda = j;
        const distDireita = n - 1 - j;

        const distanciaMinima = Math.min(
          distSuperior,
          distInferior,
          distEsquerda,
          distDireita
        );

        matriz[i][j] = distanciaMinima + 1;
      }
    }

    return matriz;
  }
}
