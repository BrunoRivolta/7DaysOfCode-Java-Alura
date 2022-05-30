let nome = prompt('Qual seu nome?');

document.write(`<h1>${nome.toLocaleUpperCase()}, obrigado por responder a pesquisa!</h1>`)
document.write('<br>');

let tipo = prompt(`${nome}, digite "1" se quiser ser desenvolvedor Front-End ou "2" para Back-End`);

if (tipo == 1) {
    let aprender = prompt(`${nome}, se você prefere aprender React digite "1" ou se preferir aprender Vue "2"`);
    if (aprender == 1) {
        document.write('<p>Você escolheu ser um desenvolvedor Front-End e prefere apremder React</p>');
        document.write('<br>');
    }
    else if (aprender == 2) {
        document.write('<p>Você escolheu ser um desenvolvedor Front-End e prefere apremder Vue</p>');
        document.write('<br>');
    }
    else {
        alert('Você escolheu uma alternativa Invalida');
    }
} 

else if (tipo == 2) {
    let aprender = prompt(`${nome}, se você quer aprender C# digite "3" ou se quiser aprender Java "4"`);
    if (aprender == 3) {
        document.write('<p>Você escolheu ser um desenvolvedor Back-End e prefere aprender C#</p>');
        document.write('<br>');
    }
    else if (aprender == 4) {
        document.write('<p>Você escolheu ser um desenvolvedor Back-End e prefere aprender Java</p>');
        document.write('<br>');
    }
    else {
        alert('Você escolheu uma alternativa Invalida');
    }
    
} 

else {
    alert('Você escolheu uma alternativa Invalida');
}



let area = prompt(`${nome}, se você prefere continuar evoluindo em sua área digite "1", se deseja se tornar Fullstack digite "2"`);

alert(`${nome}, escreva uma a uma quais são as tecnologias nas quais você gostaria de se especializar ou conhecer`);

document.write('<h2>Lista de Tecnologias de Interesse!</h2>');

repetirPergunta = true;

while (repetirPergunta) {
    let adicionar = prompt(`Adicionar abaixo a tecnologia do seu interesse? Para sair digite "N"`);
    
    if (adicionar == 'n' || adicionar == 'N') {
        repetirPergunta = false;
    }
    else {
        document.write(`<p>${adicionar.toLocaleUpperCase()}</p>`);
        alert('Adicionado com sucesso!');
    }
}

