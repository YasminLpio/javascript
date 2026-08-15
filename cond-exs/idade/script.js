function calcular() {
    let txtano = document.querySelector('#txtano')
    let res = document.querySelector('#res')

    let ano = Number(txtano.value)
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - ano

    let fem = document.querySelector('#fem')
    let masc = document.querySelector('#masc')

    if (ano <= 0 || ano > anoAtual || isNaN(ano)) {
        res.innerHTML = 'Ano inválido.'
        return
    }

    let genero = ''

    if (fem.checked) {
        genero = 'Mulher'
    } else if (masc.checked) {
        genero = 'Homem'
    } else {
        res.innerHTML = 'Selecione um sexo'
        return
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}