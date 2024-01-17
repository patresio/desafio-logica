/*
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/

class Hero {
    // type: 0 = mago, 1 = guerreiro, 2 = monge, 3 = ninja;
    constructor(name, age, type) {
        this.name = name;
        this.age = age;

        this.types = ["mago", "guerreiro", "monge", "ninja"];
        this.attacks = ["magia", "espada", "artes marciais", "shuriken"]
        this.type = type % this.types.length;
    }
    getType() {
        return this.types[this.type];
    }
    getAttack() {
        return this.attacks[this.type];
    }
    attack() {
        console.log(`O ${this.getType()} atacou usando ${this.getAttack()}`);
    }
    info() {
        console.log(`Nome: ${this.name}, idade: ${this.age}, Tipo: ${this.getType()}`);
    }
}

for(let i = 0; i < 4; i++) {
    let patresio = new Hero("patresio", 0, i);
    patresio.attack();
}