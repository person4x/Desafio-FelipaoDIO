function jornadaDoHeroi(posicaoInicial, numeroDePassos) {
    // Calcula a posição final do herói
    const posicaoFinal = posicaoInicial + numeroDePassos;

    // Imprime a posição final do herói
    console.log(`Posicao final do heroi: ${posicaoFinal}`);
}

// Exemplos de uso da função
jornadaDoHeroi(2, 3);  // Saída: Posicao final do heroi: 5
jornadaDoHeroi(15, 3); // Saída: Posicao final do heroi: 18
jornadaDoHeroi(10, 6); // Saída: Posicao final do heroi: 16