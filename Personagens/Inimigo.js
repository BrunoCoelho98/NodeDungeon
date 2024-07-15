const Personagem = require('./Personagem');

class Inimigo extends Personagem {
    constructor(nome, nivel) {
        super(nome, nivel);
        // A raridade influencia diretamente na quantidade de experiência e dinheiro que o jogador recebe ao derrotar o inimigo
        // A raridade é gerada aleatoriamente ao criar o inimigo, sendo 1 a raridade comum, 2 a raridade rara e 3 a raridade lendária, com chances de 70%, 20% e 10% respectivamente
        this.raridade = this.gerarRaridade();
        this.vida = nivel * 5;
    }

    // Métodos específicos do inimigo
    gerarRaridade()
    {
        numero = Math.floor(Math.random() * 10) + 1
        if (numero <= 7)
        {
            return 1;
        }
        else if (numero <= 9)
        {
            return 2;
        }
        else
        {
            return 3;
        }
    }

    // O inimigo pode dropar dinheiro ao ser derrotado
    droparDinheiro()
    {
        // A quantidade de dinheiro dropada é baseada na raridade do inimigo
        return (Math.floor(Math.random() * this.nivel) + 1) * this.raridade;
    }

    // O inimigo pode dropar experiência ao ser derrotado
    droparExperiencia()
    {
        // A quantidade de experiência dropada é baseada na raridade do inimigo
        return (Math.floor(Math.random() * this.nivel) + 1) * this.raridade;
    }
}

module.exports = Inimigo;