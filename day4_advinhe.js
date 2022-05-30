let novoJogo = 's';

while (novoJogo == 's' || novoJogo == 'S') {
    
    let numAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    alert('Escolhi um numero de 0 a 10. Tente advinhar qual numero. Você tem 3 chances!');
    
    for (let tentativa = 1; tentativa < 4; tentativa++) {
        
        let numeroEscolhido = prompt('Digite o numero de 1 a 10');
    
        if (numAleatorio == numeroEscolhido) {
            alert(`Parabéns você é bom mesmo, acertou na tentativa ${tentativa}`);
        }
        else {
            alert(`Você errou. Tem mais ${3 - tentativa} chance(s)`);
        }
    }
    alert(`O numero que eu tinha escolhido era ${numAleatorio}`)
    novoJogo = prompt('Quer jogar de novo? (S/N)')
}
