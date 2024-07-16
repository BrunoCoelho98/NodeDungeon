const Inimigo = require('./Personagens/Inimigo');
const prompt = require('prompt-sync')();

class Dungeon {
    constructor(nome) {
        this.nome = nome;
    }

    // A dungeon terá um número aleatório de inimigos e sua dificuldade será baseada no nível do herói
    iniciarDungeon(heroi) {
        // Lógica para iniciar a Dungeon
        console.log('Dungeon iniciada!');
        let numeroInimigos = Math.floor(Math.random() * 3) + 1;
        console.log('Você encontrou ' + numeroInimigos + ' inimigo(s)!');
        for (let i = 0; i < numeroInimigos; i++) {
            // Antes de cada batalha, o herói pode optar por tomar uma poção de cura caso ele tenha uma disponível
            if (heroi.pocoes.length > 0) {
                console.log('Vida atual: ' + heroi.vidaAtual + ' / ' + heroi.vidaMaxima);
                console.log('Você possui ' + heroi.pocoes.length + ' poção(ões) de cura!');
                let resposta = prompt('Você deseja tomar uma poção de cura? (S/N)');
                if (resposta.toUpperCase() === 'S') {
                    heroi.usarPocao();
                }
            }
            let inimigo = new Inimigo('Inimigo ' + (i + 1), heroi.nivel);
            console.log('Inimigo ' + inimigo.nome + ' encontrado!' + '\nEste é um inimigo de raridade ' + inimigo.raridade);
            this.batalhar(heroi, inimigo);
        }
        
    }

    batalhar(heroi, inimigo) {
        // Lógica de batalha
        console.log('Batalha iniciada!');
        while (heroi.vidaAtual > 0 && inimigo.vida > 0) {
            // Lógica de ataque
            let danoHeroi = heroi.atacar();
            let danoInimigo = inimigo.atacar();
            let danoRecebidoHeroi = heroi.receberDano(danoInimigo);
            let danoRecebidoInimigo = inimigo.receberDano(danoHeroi);
            console.log('Você atacou o inimigo ' + inimigo.nome + ' causando ' + danoRecebidoInimigo + ' de dano!');
            console.log('O inimigo ' + inimigo.nome + ' atacou você causando ' + danoRecebidoHeroi + ' de dano!');
            console.log('Vida do herói: ' + heroi.vidaAtual);
            console.log('Vida do inimigo ' + inimigo.nome + ': ' + inimigo.vida);
        }
        if (heroi.vidaAtual <= 0) {
            console.log('Você foi derrotado!');
            console.log('Fim da Dungeon!');
            console.log('Status final:');
            heroi.exibirHeroi();
            process.exit(0);
        } else {
            console.log('Você derrotou o inimigo ' + inimigo.nome + '!');
            let experiencia = inimigo.droparExperiencia();
            let dinheiro = inimigo.droparDinheiro();
            console.log('Você ganhou ' + experiencia + ' de experiência e ' + dinheiro + ' de dinheiro!');
            heroi.experienciaAtual += experiencia;
            heroi.carteira += dinheiro;
            console.log('Experiência atual: ' + heroi.experienciaAtual);
            console.log('Dinheiro atual: ' + heroi.carteira);
        }
    }


}

module.exports = Dungeon;
