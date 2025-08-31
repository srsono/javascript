function contagem(){
 const entrada1 = document.getElementById("inicio").value;
 const entrada2 = document.getElementById("fim").value;
 const passo = document.getElementById("passo").value;
 const res = document.getElementById("resultado");

  if ( entrada1 === "" || entrada2 === "" || passo === "" || Number(passo) <= 0) {
      window.alert("Verifique os campos e tente novamente!"); return; 
  }
      const inicio = Number(entrada1);
      const fim = Number(entrada2);
      const passoNum = Number(passo);
       
      res.innerHTML = "contando...<br>"

      let numeroAtual = inicio

      const contador = setInterval(() =>{
          if ((inicio < fim && numeroAtual >= fim) || (inicio > fim && numeroAtual <= fim)){
              clearInterval(contador);
              res.innerHTML += "\u{1F3C1}";
            } else {
         res.innerHTML = `${numeroAtual} <br>`;
         numeroAtual = inicio < fim ? numeroAtual + passoNum : numeroAtual - passoNum; 
      }},500);
    }
       
      
      
      /*if (inicio <= fim) {
        for(var numeroAtual = inicio; numeroAtual <= fim; numeroAtual += passoNum){
            res.innerHTML += `${numeroAtual} \u{1F449}<br>`
        }
      } else {
          for (var numeroAtual = inicio; numeroAtual >= fim; numeroAtual -= passoNum) {
            res.innerHTML = ""
            res.innerHTML += `${numeroAtual} \u{1F449}<br>`
        }
      }res.innerHTML += `\u{1F3C1}`              
  
*/