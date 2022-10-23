/*
João tem uma conta em um banco, com um saldo de 500 reais.
Faça uma função que simule um caixa eletrônico, com a opção de sacar dinheiro.
Se o valor do saque for maior que o saldo de João, lance a exceção personalizada
SaldoInsuficiente. Caso contrário, atualize o saldo de João e o retorne.
*/ 

class SaldoInsuficiente extends Error{
    constructor(msg){
        super(msg)
    }
}

let saldoJoao : number = 500;

 //Resposta

 function sacarDinheiro(valor : number) : number{
    if(valor > saldoJoao) throw new SaldoInsuficiente("O saldo da conta é insuficiente!");
    saldoJoao -= valor;
    return saldoJoao;
 }
