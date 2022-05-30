let Frutas = [];
let Laticínios = [];
let Congelados = [];
let Doces = [];
let Açogue = [];

alert('Bem vindo ao sistema de lista de compras');

let menu = true;

while (menu) {
    let itens = prompt(`Lista de compras:\n  Frutas: ${Frutas}\n  Laticínios: ${Laticínios}\n  Doces: ${Doces}\n  Congelados: ${Congelados}\n Açogue: ${Açogue}\n\nDigite o nome do produto para adicionar a lista de compras:\n\nOu digite "X" para apagar um item\n\nOu digite "FIM" para terminar a lista.`);
    if (itens == 'fim' || itens == 'FIM') {
        menu = false;
    } else if (itens == 'x'|| itens == 'X') { 

        let men = true; 

        while (men) {

            let remover = prompt(`Exclir item da Lista de compras:\n  Frutas: ${Frutas}\n  Laticínios: ${Laticínios}\n  Doces: ${Doces}\n  Congelados: ${Congelados}\n Açogue: ${Açogue}\n\nDigite o nome do produto para excluir da lista de compras:\n\nOu digite "FIM" para voltar ao menu principal.`);

            if (remover == 'fim' || remover == 'FIM') {
                 men = false;
            } else if (Frutas.includes(remover) == true) {
                 itemExcluir = Frutas.indexOf(remover);
                 Frutas.splice(itemExcluir,1);
            } else if (Laticínios.includes(remover) == true) {
                 itemExcluir = Laticínios.indexOf(remover);
                 Laticínios.splice(itemExcluir,1);
            } else if (Congelados.includes(remover) == true) {
                 itemExcluir = Congelados.indexOf(remover);
                 Congelados.splice(itemExcluir,1);
            } else if (Doces.includes(remover) == true) {
                 itemExcluir = Doces.indexOf(remover);
                 Doces.splice(itemExcluir,1);
            } else if (Açogue.includes(remover) == true) {
                 itemExcluir = Açogue.indexOf(remover);
                 Açogue.splice(itemExcluir,1);
            } else {
                 alert('O item digitado não existe. Tente de novo!')
            }
        }
   } else {
       let setor = prompt(`Qual setor deseja adicionar o item: ${itens}?\n0 - Frutas: ${Frutas}\n1 - Laticínios: ${Laticínios}\n2 - Congelados: ${Congelados}\n3 - Doces: ${Doces}\n4 - Açogue: ${Açogue}\n\nDigite o numero do setor:`);

       if (setor == 0) {
           Frutas.push(itens);
           alert(`O item ${itens} foi adicionado com sucesso a lista de Frutas`);
        } else if (setor == 1) {
           Laticínios.push(itens);
           alert(`O item ${itens} foi adicionado com sucesso a lista de Laticínios`);
        } else if (setor == 2) {
           Congelados.push(itens);
           alert(`O item ${itens} foi adicionado com sucesso a lista de Congelados`);
        } else if (setor == 3) {
            Doces.push(itens);
            alert(`O item ${itens} foi adicionado com sucesso a lista de Doces`);
        } else if (setor == 4) {
           Açogue.push(itens);
           alert(`O item ${itens} foi adicionado com sucesso a lista de Açogue`);
        } else {
            alert('Opção invalida. Item não foi adicionado a lista')
        }
    }
 }   

document.write('━─━────────────༺༻────────────━─━');
document.write('<h1>Lista de compras:</h1>');
document.write('<h2>Frutas</h2>');

for (let list = 0; list < Frutas.length; list++) {
    document.write(`<p>- ${Frutas[list].toLocaleUpperCase()}</p>`); 
}

document.write('<h2>Laticinios</h2>');

for (let list = 0; list < Laticínios.length; list++) {
    document.write(`<p>- ${Laticínios[list].toLocaleUpperCase()}</p>`);  
    
}

document.write('<h2>Congelados</h2>');

for (let list = 0; list < Congelados.length; list++) {
    document.write(`<p>- ${Congelados[list].toLocaleUpperCase()}</p>`);  
    
}

document.write('<h2>Doces</h2>');

for (let list = 0; list < Doces.length; list++) {
    document.write(`<p>- ${Doces[list].toLocaleUpperCase()}</p>`);  
    
}

document.write('<h2>Açogue</h2>');

for (let list = 0; list < Açogue.length; list++) {
    document.write(`<p>- ${Açogue[list].toLocaleUpperCase()}</p>`);  
}

document.write('━─━────────────༺༻────────────━─━');