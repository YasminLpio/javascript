function verificar() {
    let data = new Date()

    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente. [ERRO]')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img  = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src','img/Criança-Homem.png')

            } else if (idade >= 10 && idade < 25) {
                //Jovem
                img.setAttribute('src','img/Jovem-Homem.png')
            } else if (idade >= 25 && idade < 60) {
                //Adulto
                img.setAttribute('src','img/Adulto-Homem.png')
            } else {
                //Idoso
                img.setAttribute('src','img/Idoso-Homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
             if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src','img/Criança-Mulher.png') 

            } else if (idade >= 10 && idade < 25) {
                //Jovem
                img.setAttribute('src','img/Jovem-Mulher.png') 
            } else if (idade >= 25 && idade < 60) {
                //Adulto
                img.setAttribute('src','img/Adulta-Mulher.png') 
            } else {
                //Idoso
                img.setAttribute('src','img/Idosa-Mulher.png') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}