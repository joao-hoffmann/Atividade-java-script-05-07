let pessoa = {
    nome: 'João',
    peso: 70, // em kg
    altura: 1.75 // em metros
};

function calculaIMC(pessoa) {
    return pessoa.peso / (pessoa.altura * pessoa.altura);
}

console.log(`O IMC de ${pessoa.nome} é ${calculaIMC(pessoa).toFixed(2)}`);