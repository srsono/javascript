function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txano')
var res = document.getElementById('res')
 if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert(`[ERRO] verifique os dados e tente novamente`)
    } else{
    var fsex = document.getElementsByName('radsx')
    var idade = ano - Number(fano.value)
    var genero =``
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
           if(fsex[0].checked) {
         genero = 'Homem'
    if(idade >= 0 && idade < 10){
             //criança
             img.setAttribute('src', 'img/criancahom.png')
         } else if( idade >= 10 && idade < 21){
             //jovem
             img.setAttribute('src', 'img/homemjovem.png')
         } else if ( idade >= 21 && idade < 50){
             //adulto
             img.setAttribute('src', 'img/homemadulto.png')
         }else {
             //idoso
             img.setAttribute('src', 'img/homemidoso.png')
         }
     } else if(fsex[1].checked) {
         genero = 'Mulher'
     if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'img/criancabbfemi.png')
        } else if( idade >= 10 && idade < 21){
            //jovem
            img.setAttribute('src', 'img/mulherjovem.png')
        } else if ( idade >= 21 && idade < 50){
            //adulta
            img.setAttribute('src', 'img/mulheradulta.png')
        }else {
            //idosa
            img.setAttribute('src', 'img/mulheridosa.png')
        }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `<p>detectamos ${genero} com ${idade} anos.</p>`
     
     res.appendChild(img)
    }

}