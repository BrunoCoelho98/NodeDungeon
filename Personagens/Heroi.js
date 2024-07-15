const Personagem = require('./Personagem');
const Arma = require('../Loja/Armas');
const Armadura = require('../Loja/Armadura');

class Heroi extends Personagem {

    constructor(nome, nivel, forca, agilidade, sorte) {
        super(nome, nivel);
        // Atributos específicos do herói

        // Forca do herói que influencia o dano causado
        this.forca = forca;

        // Agilidade do herói que influencia a chance de causar dano crítico
        this.agilidade = agilidade;

        // Sorte do herói que influencia o drop de dinheiro
        this.sorte = sorte; 

        // O herói terá uma arma inicial
        this.arma = new Arma('Espada de Madeira', 1, 2);

        // O herói terá uma armadura inicial
        this.armadura = new Armadura('Armadura de Couro', 1, 2);
    }

    // O herói terá uma carteira que armazenará a quantidade de dinheiro que ele possui
    carteira = 0;

    experienciaAtual = 0;
    experienciaProximoNivel = 5;
    vidaMaxima = this.nivel * 7;
    vidaAtual = this.vidaMaxima;
    pocoes = [];

    // O herói pode equipar uma arma para aumentar seu dano
    equiparArma(arma) {
        if (arma instanceof Arma) {
            this.arma = arma;
        }
    }

    // O herói pode equipar uma armadura para aumentar sua resistência a dano
    equiparArmadura(armadura) {
        if (armadura instanceof Armadura) {
            this.armadura = armadura;
        }
    }


    // Lógica para upar os atributos do herois herói
    // A cada nível, o herói ganha 1 ponto de atributo para distribuir entre força, agilidade e sorte
    uparAtributos() {
        console.log('Escolha um atributo para upar:');
        console.log('1 - Força');
        console.log('2 - Agilidade');
        console.log('3 - Sorte');
        let atributo = prompt('Escolha um atributo para upar: ');
        switch (atributo) {
            case '1':
                this.forca++;
                console.log('Força upada');
                break;
            case '2':
                this.agilidade++;
                console.log('Agilidade upada');
                break;
            case '3':
                this.sorte++;
                console.log('Sorte upada');
                break;
            default:
                console.log('Opção inválida');
                break
        }
    
    }

    // A cada nível, a experiência necessária para upar aumenta em 5
    /* Método para upar o herói, recebe a quantidade de experiência que o herói ganhou e faz um loop até que a experiência seja menor que a experiência necessária para upar, depois
    chama a função de upar atributos com a quantidade de níveis que o herói upou */
    uparHeroi(experiencia) {
        this.experienciaAtual += experiencia;
        while (this.experienciaAtual >= this.experienciaProximoNivel) {
            this.experienciaAtual -= this.experienciaProximoNivel;
            this.experienciaProximoNivel += 5;
            this.nivel++;
            this.vidaMaxima = this.nivel * 7;
            this.uparAtributos();
        }
    }
   

    // Métodos específicos do herói

    // Método para atacar, retorna o dano que o herói vai causar
    atacar() {
        // Lógica de ataque
        let dano = this.forca + this.arma.dano;
        if (Math.floor(Math.random() * 100) <= this.agilidade*5) {
            dano *= 2;
            console.log('Dano crítico!');
        }
        return dano;
    }

    // Método para receber dano, recebe o dano que o herói vai receber e subtrai a defesa da armadura
    receberDano(dano) {
        // Lógica para receber dano
        let danoFinal = dano - this.armadura.defesa;
        if (danoFinal < 0) {
            danoFinal = 0;
        }
        this.vidaAtual -= danoFinal;
        if (this.vidaAtual <= 0) {
            this.vidaAtual = 0;
        }
        return danoFinal;
    }

    // Método para usar uma poção, recupera o valor de vida da poção
    usarPocao() {
        // Verifica se o herói possui poções
        if (this.pocoes.length > 0) {
            this.vidaAtual += this.pocoes[0].cura;
            // Não permitir que a vida atual ultrapasse a vida máxima
            if (this.vidaAtual > this.vidaMaxima) {
                this.vidaAtual = this.vidaMaxima;
            this.pocoes.shift();
            }
        }
    }

    // Método para exibir as informações do herói
    exibirHeroi() {
        console.log('Nome: ' + this.nome);
        console.log('Nível: ' + this.nivel);
        console.log('Força: ' + this.forca);
        console.log('Agilidade: ' + this.agilidade);
        console.log('Sorte: ' + this.sorte);
        console.log('Vida: ' + this.vidaAtual + '/' + this.vidaMaxima);
        console.log('Experiência: ' + this.experienciaAtual + '/' + this.experienciaProximoNivel);
        console.log('Carteira: ' + this.carteira);
        console.log('Arma: ' + this.arma.nome);
        console.log('Armadura: ' + this.armadura.nome);
        console.log('Poções: ' + this.pocoes.length);
    }
}

module.exports = Heroi;
