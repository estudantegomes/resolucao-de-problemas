export default class Avalicao {
  /* Exercício 1 – Próximo Múltiplo
Dados dois números inteiros positivos, A e B, retorne o primeiro múltiplo de A depois de B. 

Exercício 2 – Validade
Dados três números inteiros, que representam a data de validade de um produto (dia, mês e ano,
respectivamente), retorne se ele já está vencido. A data atual deve estar fixada no código. Não
utilize biblioteca com funcionalidades predefinidas para datas.

Exercício 3 – Primo
Dado um número inteiro positivo, retorne se ele é primo. Não utilize método predefinido para
verificação de primalidade.
*/

  public ex1(a: number, b: number): number {
    let aux: number = 0;
    if(a == 0)
        return 0;
    if (a > b) 
        return a;
    aux = Math.floor((b / a)+1) * a;

    return aux;
  }

  public ex2(d: number, m: number, a: number): string {
    let aux: string = "Dentro da validade.";
    let hoje: number = 20250818;

    let data: number = a * 10000 + m * 100 + d;
    if (hoje > data) aux = "Vencido.";

    return aux;
  }

  public ex3(n: number): boolean {
    let aux: number = 0;
    if(n <= 1){
        console.log(`Percorreu ${aux} número(s).`);
        return false;
    }
    if (n == 2 || n == 3 || n == 5 || n == 7){
        console.log(`Percorreu ${aux} número(s).`); 
        return true;
    }

    if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0){
        console.log(`Percorreu ${aux} número(s).`); 
        return false;
    }

    for (let i: number = 11; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0){
        console.log(`Percorreu ${aux} número(s).`); 
        return false;
      }
      aux+=1;
    }

    console.log(`Percorreu ${aux} número(s).`);
    return true;
  }
}
