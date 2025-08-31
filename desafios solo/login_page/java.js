var form = window.document.querySelector('form#formlog')

form.addEventListener('submit',validalog)

function validalog( event ){

    event.preventDefault()

var usuario = window.document.querySelector('input#usuario').value

var senha = window.document.querySelector('input#senhalog').value

var erro = window.document.querySelector('p#msg')

if( usuario === "" || senha === ""){
    erro.innerText = 'verifique os campos e tentenovamente'
} else{
 erro.innerText = "iniciando login..."
}

} 