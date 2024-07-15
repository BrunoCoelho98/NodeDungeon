const readline = require('readline');
const Heroi = require('./Personagens/Heroi');
const Inimigo = require('./Personagens/Inimigo');
const Dungeon = require('./Dungeon');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const heroi = new Heroi('Herói', 1, 1, 1, 1);

const dungeon = new Dungeon ('Dungeon 1');

rl.question('Pressione Enter para iniciar a Dungeon ...', (answer) => {
    dungeon.iniciarDungeon (heroi);
    rl.close();
});
