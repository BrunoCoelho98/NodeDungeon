const readline = require('readline');
const Heroi = require('./Personagens/Heroi');
const Dungeon = require('./Dungeon');
const Loja = require('./Loja/Loja');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar ao usuário de forma assíncrona
function questionAsync(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

const heroi = new Heroi('Herói', 1, 3, 3, 3);

const dungeon = new Dungeon ('Dungeon 1');

async function comprarItens (heroi) {
    // Lógica para comprar itens
    let loja = new Loja(heroi);
    while (true) {
        loja.exibirLoja();
        const item = await questionAsync('Selecione um item para comprar: ');
        if (item === '4') {
            return;
        }
        loja.selecionarItem(item);
    }
}   



rl.question('Pressione Enter para iniciar a Dungeon ...', async (answer) => {

    while (heroi.vidaAtual > 0) {
        // Iniciar a dungeon
        dungeon.iniciarDungeon (heroi);
        
        // Se o jogador sobreviver, perguntar se ele quer acessar a loja
        const answer = await questionAsync('Você deseja acessar a loja? (S/N)');
        if (answer.toUpperCase() === 'S') {
            // Lógica para acessar a loja
            console.log('Acessando a loja...');
            await comprarItens(heroi);
        } else {
            console.log('Retornando à Dungeon...');
        }
    }
    rl.close();
});


