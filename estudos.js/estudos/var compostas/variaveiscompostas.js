
 /*forma padrão*/

let num = [5,8,2,9,3]
num[5] = ['fuciona']
num.push('test')
num.sort()
num.length

console,console.log(`nosso vetor é o ${num.length}`);  
console.log(`nosso primeiro elemento do vetor é ${num[0]}`)
console.log(num)


/*test com laços, encurtando linhas*/

let valor = [8,1,7,4,2,9]

for(let pos=0; pos < valor.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)    
}


/*usando for in*/

let valores = [8,1,7,4,2,9]
valores.sort()
for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
let pos

