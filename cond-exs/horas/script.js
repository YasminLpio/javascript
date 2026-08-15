function carregar() { 
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/manhaa.webp'
        document.body.style.background = '#8061838c'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'img/tarde.webp'
        document.body.style.background = '#90674088'
    } else {
        // BOA NOITE!
        img.src = 'img/noite.webp'
        document.body.style.background = '#86a8d5c0'
    }
}