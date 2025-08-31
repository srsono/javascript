let veiculos = [ 1, 2, 3, 4, 5, 6, ]
veiculos[6] = 7
/*
for(var vaga = 0; vaga < veiculos.length; vaga++){
    console.log(veiculos[vaga])
}
*/
for( vaga in veiculos ){
console.log(veiculos[vaga])
}