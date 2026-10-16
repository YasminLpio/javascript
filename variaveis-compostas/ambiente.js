let num = [5, 7, 2, 9, 3]
//num[5] = 6   //Adiciona o vetor no índice solicitado.
//num.push(12)  //Adiciona o vetor automaticamente ao começo dos vetores.
num.sort()   //Coloca os elementos em ordem crescente.
num.push(12)  //Adiciona o vetor automaticamente ao final dos vetores.
num.length   //'length' é um atributo que não precisa de '()' em Javascript


console.log(`Nosso vetor é o ${num}`)
/*console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O segundo valor do vetor é ${num[1]}`)
console.log(`O terceiro valor do vetor é ${num[2]}`)
console.log(`O quarto valor do vetor é ${num[3]}`)
console.log(`O quinto valor do vetor é ${num[4]}`)
console.log(`O sexto valor do vetor é ${num[5]}`)
console.log(`O sétimo valor do vetor é ${num[6]}`) CÓDIGO EXTENSO*/


/*let pos = []
for (let pos=0; pos < num.length; pos++) {
     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    } */ //MAIS TRADICIONAL 

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //MAIS RECENTE

/*let pos = num.indexOf(4) //Encontra o valor na posição solicitada.

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}*/
