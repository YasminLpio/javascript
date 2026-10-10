function calcular() {
    let txtano = document.querySelector('#txtano')
    let res = document.querySelector('#res')



    if () {
        res.innerHTML = 'res'
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