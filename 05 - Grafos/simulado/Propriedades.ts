// Métodos de instância

// Map.prototype.clear()
// Remove todos os pares chave-valor do objeto Map.

// Map.prototype.delete()
// Remove a entrada especificada pela chave deste Map.

// Map.prototype.entries()
// Retorna um novo objeto Iterator que contém um array de dois elementos [chave, valor] para cada elemento no objeto Map, na ordem em que foram inseridos.

// Map.prototype.forEach()
// Chama a função callbackFn uma vez para cada par chave-valor presente no objeto Map, na ordem de inserção.
// Se um parâmetro thisArg for fornecido, ele será usado como o valor de this para cada chamada do callback.

// Map.prototype.get()
// Retorna o valor correspondente à chave no Map, ou undefined se a chave não existir.

// Map.prototype.getOrInsert() (Experimental)
// Retorna o valor correspondente à chave especificada no Map.
// Se a chave não estiver presente, insere uma nova entrada com a chave e um valor padrão fornecido, e retorna o valor inserido.

// Map.prototype.getOrInsertComputed() (Experimental)
// Retorna o valor correspondente à chave especificada no Map.
// Se a chave não estiver presente, insere uma nova entrada com a chave e um valor padrão gerado a partir de um callback fornecido, e retorna o valor inserido.

// Map.prototype.has()
// Retorna um valor booleano indicando se existe ou não uma entrada com a chave especificada neste Map.

// Map.prototype.keys()
// Retorna um novo objeto Iterator que contém as chaves de cada elemento no Map, na ordem de inserção.

// Map.prototype.set()
// Adiciona uma nova entrada com a chave e o valor especificados ao Map, ou atualiza uma entrada existente se a chave já existir.

// Map.prototype.values()
// Retorna um novo objeto Iterator que contém os valores de cada elemento no Map, na ordem de inserção.

// Map.prototypeSymbol.iterator

//Exemplo

// Cria um Map onde as chaves são strings e os valores são números
let idades = new Map<string, number>();

// Métodos: set() para adicionar elementos
idades.set('Alice', 30);
idades.set('Bob', 25);
idades.set('Charlie', 35);

// Propriedade: size
console.log(`Tamanho do mapa: ${idades.size}`); // Saída: Tamanho do mapa: 3

// Método: get() para obter um valor
console.log(`Idade de Bob: ${idades.get('Bob')}`); // Saída: Idade de Bob: 25

// Método: has() para verificar a existência de uma chave
console.log(`Tem idade para o David? ${idades.has('David')}`); // Saída: false

// Método: forEach() para iterar sobre o mapa
console.log('Iterando com forEach:');
idades.forEach((idade, nome) => {
    console.log(`${nome} tem ${idade} anos.`);
});

// Método: delete() para remover um elemento
idades.delete('Bob');
console.log(`Tamanho do mapa após a exclusão: ${idades.size}`); // Saída: Tamanho do mapa após a exclusão: 2

// Método: clear() para limpar todos os elementos
idades.clear();
console.log(`Tamanho do mapa após limpar: ${idades.size}`); // Saída: Tamanho do mapa após limpar: 0

