function carregar(){
    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('imagem')

    var data = new Date()

    var hrs = data.getHours()



    msg.innerHTML = `Agora são ${hrs} horas.`
    if(hrs >= 0 && hrs < 12) {
         img.src = `dia.png`
         document.body.style.background = `#FCE138`
    } else if( hrs >= 12 && hrs < 18){
        img.src = `tarde.png`
        document.body.style.background = `#FCAA08`
    } else{
        img.src = `noite.png`
        document.body.style.background = `#824D61`
    }

}


