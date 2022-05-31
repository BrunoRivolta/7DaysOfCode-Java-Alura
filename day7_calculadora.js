function soma (n1, n2) {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}

function subtração (n1, n2) {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
}

function multiplicação (n1, n2) {
    resultado = n1 * n2;
    alert(`${n1} x ${n2} = ${resultado}`);
}

function divisão (n1, n2) {
    resultado = n1 / n2;
    alert(`${n1} ÷ ${n2} = ${resultado}`);
}

function raizQuadrada (n1) {
    resultado = Math.sqrt(n1);
    alert(`√${n1} = ${resultado}`);
}

function quadrado (n1) {
    resultado = n1 * n1;
    alert(`${n1}² = ${resultado}`);
}

let repetir = true;
let primeiroNumero;
let operador;
let segundoNumero;

while (repetir){
    
    primeiroNumero = Number(prompt('CALCULADORA V0.1\n\nDigite o primeiro numero:'));
    
    operador = Number(prompt('OPERAÇÕES:\n\n0 = Soma\n1 = Subtração\n2 = Multiplicação\n3 = Divisão\n4 = Raiz Quadrada\n5 = Multiplicar ao Quadrado\n\nDigite o numero da operação:'));

    if (operador == 0 || operador == 1 || operador == 2 || operador == 3) {
        segundoNumero = Number(prompt('Digite o segundo numero:'));
    }
    
    switch (operador) {
        case 0:
            soma(primeiroNumero, segundoNumero);
            break;           
        case 1:
            subtração(primeiroNumero, segundoNumero);
            break;
        case 2:
            multiplicação(primeiroNumero, segundoNumero);
            break;
        case 3:
            divisão(primeiroNumero, segundoNumero);
            break;
        case 4:
            raizQuadrada(primeiroNumero, segundoNumero);
            break;
        case 5:
            quadrado(primeiroNumero, segundoNumero);  
            break;  
        default:
            alert('Opção invalida');
            break;
    }

    repetir = prompt('Deseja fazer uma novo Calculo? (S/N)')
    
    if (repetir == "n" || repetir == "N") {
        alert('Obrigado por usar nossa calculadora!');
        repetir = false;
    } 
}



