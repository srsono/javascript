var agora = new Date()
console.log(`o tempo é seu inimo ou seu amigo? `)
var hora = agora.getHours()

console.log(`De acordo com seu sistema são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`bom dia magnata`)
} else if ( hora <= 18){
    console.log(`boa tarde magnata`)
} else if ( hora >= 19){
    console.log(`provavelmente está fazendo algo nessa madrugada`)
}