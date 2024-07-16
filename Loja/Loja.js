const Armadura = require('./Armadura');
const Armas = require('./Armas');
const Pocoes = require('./Pocoes');

class Loja {
    constructor(heroi) {
        this.arma = new Armas('Espada nv ' + heroi.nivel, heroi.nivel*7, heroi.nivel + 2);
        this.armadura = new Armadura('Armadura nv ' + heroi.nivel, heroi.nivel*7, heroi.nivel + 2);
        this.pocao = new Pocoes('Poção de Cura (' + heroi.nivel*4 + ' PV)', heroi.nivel*3, heroi.nivel * 4);
        this.heroi = heroi;
    }  

    // Métodos específicos da loja

    // Método para exibir os itens disponíveis na loja e seus valores
    exibirLoja() {
        console.log('Saldo: ' + this.heroi.carteira);
        console.log('Itens disponíveis na loja:');
        console.log('1 - Arma: ' + this.arma.nome + ' - Valor: ' + this.arma.valor);
        console.log('2 - Armadura: ' + this.armadura.nome + ' - Valor: ' + this.armadura.valor);
        console.log('3 - Poção: ' + this.pocao.nome + ' - Valor: ' + this.pocao.valor);
        console.log('4 - Sair');
    }

    // Método para selecionar o item que o herói deseja comprar, recebe o herói como parâmetro
    selecionarItem(item) {
        switch (item) {
            case "1":
                this.comprarArma(this.heroi);
                break;
            case "2":
                this.comprarArmadura(this.heroi);
                break;
            case "3":
                this.comprarPocao(this.heroi);
                break;
            default:
                console.log('Item inválido');
        }
    }

    // Método para comprar uma arma
    comprarArma() {
        if (this.heroi.carteira >= this.arma.valor) {
            this.heroi.carteira -= this.arma.valor;
            this.heroi.arma = this.arma;
            console.log('Você comprou ' + this.arma.nome);
        } else {
            console.log('Você não tem dinheiro suficiente para comprar esta arma');
        }
    }

    // Método para comprar uma armadura
    comprarArmadura() {
        if (this.heroi.carteira >= this.armadura.valor) {
            this.heroi.carteira -= this.armadura.valor;
            this.heroi.armadura = this.armadura;
            console.log('Você comprou ' + this.armadura.nome);
        } else {
            console.log('Você não tem dinheiro suficiente para comprar esta armadura');
        }
    }

    // Método para comprar uma poção
    comprarPocao() {
        if (this.heroi.carteira >= this.pocao.valor) {
            this.heroi.carteira -= this.pocao.valor;
            this.heroi.pocoes.push(this.pocao);
            console.log('Você comprou ' + this.pocao.nome);
        } else {
            console.log('Você não tem dinheiro suficiente para comprar esta poção');
        }
    }
}

module.exports = Loja;