//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função 

//usar spread com objeto
const funcionario = {nome:'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)