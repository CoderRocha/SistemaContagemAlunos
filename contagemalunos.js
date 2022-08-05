// Sistema de Contagem de Alunos por Ordem de Chamada

let numeroDeAlunos = ["Ana", "Bia", "Carol", "Daniela", "Ester"]
for (let contador = 0; contador < numeroDeAlunos.length; contador++) {
    
    if (contador == 0) {
        console.log("O número é 0")
    } else if (contador % 2 == 0) {
        console.log(`O número ${contador} é par`)
    } else {
        console.log(`O número ${contador} é ímpar`)
    }
}


numeroDeAlunos.forEach(cadaItem => {
    console.log(cadaItem)
});