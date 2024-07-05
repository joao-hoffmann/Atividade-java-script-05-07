function contaLetra(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }
    return contador;
}

console.log(contaLetra("Hello World", "o"));