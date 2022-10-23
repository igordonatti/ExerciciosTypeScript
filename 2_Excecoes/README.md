## Exceções

1. A função 'multiplica' recebe dois números como parâmetros e retorna o seu produto.
Porém, caso um usuário entrar com um argumento que não é um número, a função lançará uma exceção.
Use os conceitos de tratamento de exceções para que caso isso aconteça, seja exibido um alert para o usuário,
informando que alguma das entradas não é um número. Caso nenhuma exceção seja encontrada, apenas exiba um alert com o retorno da função
```
function multiplica(n : number, m : number) : number{ 
    if(isNaN(n) || isNaN(m))
        throw Error("Erro de input");
    return n*m;
}

let n : number = Number(prompt('Digite o primeiro valor:'));
let m : number = Number(prompt('Digite o segundo valor:'));
```

2. João tem uma conta em um banco, com um saldo de 500 reais.
Faça uma função que simule um caixa eletrônico, com a opção de sacar dinheiro.
Se o valor do saque for maior que o saldo de João, lance a exceção personalizada
SaldoInsuficiente. Caso contrário, atualize o saldo de João e o retorne.
```
class SaldoInsuficiente extends Error{
    constructor(msg){
        super(msg)
    }
}

let saldoJoao : number = 500;
```
