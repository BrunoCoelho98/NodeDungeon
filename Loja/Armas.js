const Item = require('./Item');


// A arma terá um valor de dano que será somado ao dano base do personagem
class Arma extends Item {
    constructor(nome, valor, dano) {
        super(nome, 'Arma', valor);
        this.dano = dano;
    }
}

module.exports = Arma;
