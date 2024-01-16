/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

// Inserir as informações abaixo
let nomeDoJogador = ""
let experienciaDoPlayer = 632


// Não colocar nada aqui
let nivelDoJogador = ""

console.log(experienciaDoPlayer)

if (experienciaDoPlayer <= 1000){
    nívelDoJogador = "Ferro"
} 
else if(experienciaDoPlayer > 1000 && experienciaDoPlayer <= 2000){
    nívelDoJogador = "Bronze"
}
else if(experienciaDoPlayer > 2000 && experienciaDoPlayer <= 3000){
    nívelDoJogador = "Prata"
}
else if(experienciaDoPlayer > 3000 && experienciaDoPlayer <= 4000){
    nívelDoJogador = "Ouro"
}
else if(experienciaDoPlayer > 4000 && experienciaDoPlayer <= 5000){
    nívelDoJogador = "Platina"
}
else if(experienciaDoPlayer > 5000 && experienciaDoPlayer <= 6000){
    nívelDoJogador = "Diamante"
}
else if(experienciaDoPlayer > 6000 && experienciaDoPlayer <= 7000){
    nívelDoJogador = "Zafira"
}
else if(experienciaDoPlayer > 7000 && experienciaDoPlayer <= 8000){
    nívelDoJogador = "Ascendente"
}
else if(experienciaDoPlayer > 8000 && experienciaDoPlayer <= 9000){
    nívelDoJogador = "Imortal"
}
else if(experienciaDoPlayer > 9000 && experienciaDoPlayer <= 10000){
    nívelDoJogador = "Radiante"
}
else if(experienciaDoPlayer > 10000){
    nívelDoJogador = "Gran Master"
}

console.log(`O Herói de nome ${nomeDoJogador} está no nível de ${nívelDoJogador}`)