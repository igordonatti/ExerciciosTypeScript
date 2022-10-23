/*
João tem uma conta em um banco, com um saldo de 500 reais.
Faça uma função que simule um caixa eletrônico, com a opção de sacar dinheiro.
Se o valor do saque for maior que o saldo de João, lance a exceção personalizada
SaldoInsuficiente. Caso contrário, atualize o saldo de João e o retorne.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SaldoInsuficiente = /** @class */ (function (_super) {
    __extends(SaldoInsuficiente, _super);
    function SaldoInsuficiente(msg) {
        return _super.call(this, msg) || this;
    }
    return SaldoInsuficiente;
}(Error));
var saldoJoao = 500;
//Resposta
function sacarDinheiro(valor) {
    if (valor > saldoJoao)
        throw new SaldoInsuficiente("O saldo da conta é insuficiente!");
    saldoJoao -= valor;
    return saldoJoao;
}
