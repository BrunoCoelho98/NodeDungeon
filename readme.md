# NodeDungeon

NodeDungeon é um jogo de RPG de texto simples construído utilizando NodeJS onde você controla um herói, enfrenta inimigos em uma dungeon, ganha experiência e dinheiro, e pode comprar itens em uma loja.

Você começa entrando em uma Dungeon, onde pode encontrar entre 1 a 3 inimigos, e cada inimigo pode ser Comum, Raro ou Lendário. Quanto maior a raridade do inimigo, maior serão seus drops de experiência e dinheiro, porém ele também será mais forte.

Depois de cada Dungeon derrotada, você poderá upar de nível e aumentar seus atributos, sendo eles:

    Força: Aumenta seu dano 

    Agilidade: Aumenta sua chance de crítico

    Sorte: Aumenta seu drop de dinheiro e experiência

Além disso, depois de terminar uma Dungeon você poderá acessar a Loja, onde poderá comprar:
    Arma: Aumenta seu dano

    Armadura: Aumenta sua defesa

    Poção: Cura seus pontos de vida

Após cada dungeon derrotada, os inimigos vão ficando mais fortes, o objetivo do jogo é ir o mais longe possível.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos e diretórios:

- `index.js`: Arquivo principal que inicia o jogo.
- `Dungeon.js`: Gerencia a lógica da dungeon e das batalhas.
- `Personagens/Heroi.js`: Define a classe `Heroi` com seus atributos e métodos.
- `Personagens/Inimigo.js`: Define a classe `Inimigo` com seus atributos e métodos.
- `Personagens/Personagem.js`: Classe base para `Heroi` e `Inimigo`.
- `Loja/Loja.js`: Gerencia a lógica da loja onde o herói pode comprar itens.
- `Loja/Armas.js`: Define a classe `Armas` para criar objetos de arma.
- `Loja/Armadura.js`: Define a classe `Armadura` para criar objetos de armadura.
- `Loja/Pocoes.js`: Define a classe `Pocoes` para criar objetos de poções de cura.
- `Loja/Item`: Classe base para `Armas`, `Armadura` e `Pocoes`.

## Execução

Para rodar este projeto, você precisa ter o Node.js instalado em sua máquina. Então, clone este repositório e instale as dependências:

```bash
git clone https://github.com/BrunoCoelho98/NodeDungeon.git
cd NodeDungeon
npm i prompt-sync
npm install
node .\index.js
```