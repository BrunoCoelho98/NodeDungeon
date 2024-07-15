const readline = require('readline');
const Heroi = require('./Personagens/Heroi');
const Inimigo = require('./Personagens/Inimigo');
const Dungeon = require('./Dungeon');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const heroi = new Heroi('Herói', 10, 5, 100, 3);
const inimigo = new Inimigo('Inimigo', 8, 3, 80, 1);

const dungeon = new Dungeon ('Fase 1', [inimigo]);

rl.question('Pressione Enter para iniciar a Dungeon ...', (answer) => {
    dungeon.iniciarDungeon (heroi);
    rl.close();
});
