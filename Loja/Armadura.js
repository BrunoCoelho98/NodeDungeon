const Item = require('./Item');


// A armadura terá um valor de defesa que representa o dano que será negado ao personagem em cada ataque recebido
class Armadura extends Item {
    constructor(nome, valor, defesa) {
        super(nome, 'Armadura', valor);
        this.defesa = defesa;
    }

}

module.exports = Armadura;
