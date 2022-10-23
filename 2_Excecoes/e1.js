/*A função 'multiplica' recebe dois números como parâmetros e retorna o seu produto.
Porém, caso um usuário entrar com um argumento que não é um número, a função lançará uma exceção.

Use os conceitos de tratamento de exceções para que caso isso aconteça, seja exibido um alert para o usuário,
informando que alguma das entradas não é um número. Caso nenhuma exceção seja encontrada, apenas exiba um alert com o retorno da função*/
function multiplica(n, m) {
    if (isNaN(n) || isNaN(m))
        throw Error("Erro de input");
    return n * m;
}
var n = Number(prompt('Digite o primeiro valor:'));
var m = Number(prompt('Digite o segundo valor:'));
//Resposta
try {
    alert(multiplica(n, m));
}
catch (e) {
    alert('Alguma das entradas fornecidas não é um número!');
}
