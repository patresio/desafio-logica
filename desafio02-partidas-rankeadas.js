/*
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

playerRank(250, 20)

function playerRank(vitorias, derrotas){
    value = matchBalance(vitorias, derrotas)
    let rank = ""
    if (value <= 10){ rank = "Ferro"}
    else if (value > 10 && value <= 20){ rank = "Ferro"}
    else if (value > 20 && value <= 30){ rank = "Bronze"}
    else if (value > 30 && value <= 40){ rank = "Prata"}
    else if (value > 40 && value <= 50){ rank = "Ouro"}
    else if (value > 50 && value <= 80){ rank = "Diamante"}
    else if (value > 80 && value <= 100){ rank = "Lendário"}
    else if (value > 100){ rank = "Imortal"}


    console.log(`O Herói tem de saldo de ${value}  está no nível de ${rank}`)

    }


function matchBalance(vitorias, derrotas){
    value = vitorias - derrotas
    return value
}

