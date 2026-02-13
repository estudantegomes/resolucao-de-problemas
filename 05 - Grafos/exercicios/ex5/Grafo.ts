export default class Grafo {
  private vertices: string[];
  private arestas: string[][] = [];

  public constructor(vertices: string[], arestas: string[][]) {
    this.vertices = vertices;
    this.arestas = arestas;
  }

  public adicionaVertice(vertice: string): void {
    this.vertices.push(vertice);
  }

  public adicionaAresta(vertice: string, vizinho: string): void {
    this.arestas.push([vertice, vizinho]);
  }

  public exibirVertices(): string[] {
    return this.vertices;
  }

  public exibirArestas(): string[][] {
    return this.arestas;
  }

  public exibirVizinhos(vertice: string): string[] {
    const vizinhos: string[] = [];

    for (let i = 0; i < this.arestas.length; i++) {
      const aresta = this.arestas[i];

      const base = aresta[0];
      const vizinho = aresta[1];

      if (base == vertice && !vizinhos.includes(vizinho)) {
        vizinhos.push(vizinho);
      }

      if (vizinho == vertice && !vizinhos.includes(base)) {
        vizinhos.push(base);
      }
    }

    return vizinhos;
  }

  public removeAresta(vertice: string, vizinho: string): void {
    for (let i = this.arestas.length - 1; i >= 0; i--) {
      const aux = this.arestas[i]; 
      const v1 = aux[0];
      const v2 = aux[1];

      let aresta: boolean = (v1 == vertice && v2 == vizinho);
      let inversa: boolean = (v1 == vizinho && v2 == vertice);

      if (aresta || inversa) {
        this.arestas.splice(i, 1);
      }
    }
  }

  // Utilizando for of
  //   public vizinhos(vertice: string): string[] {
  //     const vizinhos: string[] = [];
  //     for (const [vertice, vizinho] of this.arestas) {
  //       if (vertice == vertice && !vizinhos.includes(vizinho)) {
  //         vizinhos.push(vizinho);
  //       }
  //       if (vizinho == vertice && !vizinhos.includes(vertice)) {
  //         vizinhos.push(vertice);
  //       }
  //     }
  //     return vizinhos;
  //   }
}
