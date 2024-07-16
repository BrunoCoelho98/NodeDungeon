const Item = require('./Item');


// A poção terá um valor de cura que representa a quantidade de vida que será recuperada ao ser usada
class Pocao extends Item {
    constructor(nome, valor, cura) {
        super(nome, 'Pocao', valor);
        this.cura = cura;
    }
}

module.exports = Pocao;
