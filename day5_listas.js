let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];
let listaAçogue = [];

alert('Bem vindo ao sistema de lista de compras');

let menu = true;

while (menu) {
   let itens = prompt('Deseja adicionar algum produto na Lista de Frutas? Se não quiser digite "N"');

    if (itens == "n" || itens == "N") {
        menu = false;
    }
    else {
        listaFrutas.push(itens);
        alert(`O item ${itens} foi adicionado com sucesso!`);
    }
}

menu = true;

while (menu) {
   let itens = prompt('Deseja adicionar algum produto na Lista de Laticinios? Se não quiser digite "N"');

    if (itens == "n" || itens == "N") {
        menu = false;
    }
    else {
        listaLaticinios.push(itens);
        alert(`O item ${itens} foi adicionado com sucesso!`);
    }
}

menu = true;

while (menu) {
   let itens = prompt('Deseja adicionar algum produto na Lista de Congelados? Se não quiser digite "N"');

    if (itens == "n" || itens == "N") {
        menu = false;
    }
    else {
        listaCongelados.push(itens);
        alert(`O item ${itens} foi adicionado com sucesso!`);
    }
}

menu = true;

while (menu) {
   let itens = prompt('Deseja adicionar algum produto na Lista de Doces? Se não quiser digite "N"');

    if (itens == "n" || itens == "N") {
        menu = false;
    }
    else {
        listaDoces.push(itens);
        alert(`O item ${itens} foi adicionado com sucesso!`);
    }
}

menu = true;

while (menu) {
   let itens = prompt('Deseja adicionar algum produto na Lista do Açogue? Se não quiser digite "N"');

    if (itens == "n" || itens == "N") {
        menu = false;
    }
    else {
        listaAçogue.push(itens);
        alert(`O item ${itens} foi adicionado com sucesso!`);
    }
}

document.write('<h1>Lista de compras por setor</h1>');
document.write('<h2>Frutas</h2>');

for (let list = 0; list < listaFrutas.length; list++) {
    document.write(`<p>- ${listaFrutas[list].toLocaleUpperCase()}</p>`);  
    
}

document.write('<h2>Laticinios</h2>');

for (let list = 0; list < listaLaticinios.length; list++) {
    document.write(`<p>- ${listaLaticinios[list].toLocaleUpperCase()}</p>`);  
    
}

document.write('<h2>Congelados</h2>');

for (let list = 0; list < listaCongelados.length; list++) {
    document.write(`<p>- ${listaCongelados[list].toLocaleUpperCase()}</p>`);  
    
}

document.write('<h2>Doces</h2>');

for (let list = 0; list < listaDoces.length; list++) {
    document.write(`<p>- ${listaDoces[list].toLocaleUpperCase()}</p>`);  
    
}

document.write('<h2>Açogue</h2>');

for (let list = 0; list < listaAçogue.length; list++) {
    document.write(`<p>- ${listaAçogue[list].toLocaleUpperCase()}</p>`);  
    
}