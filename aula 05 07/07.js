function contaPalavrasUnicas(frase) {
    let palavras = frase.toLowerCase().split(" ");
    let unicas = new Set(palavras);
    return unicas.size;
}

console.log(contaPalavrasUnicas("Hello world hello"));