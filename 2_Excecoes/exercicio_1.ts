function multiplica(n : number, m : number) : number{ 
    if(isNaN(n) || isNaN(m))
        throw Error("Erro de input");
    return n*m;
}

let n : number = Number(prompt('Digite o primeiro valor:'));
let m : number = Number(prompt('Digite o segundo valor:'));

//Resposta

try {
    alert(multiplica(n,m));
} catch (e) {
    alert('Alguma das entradas fornecidas não é um número!')
}
