var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});  
  
  function Calcular(){
    var campoIdade = document.getElementById('idade');
    var msgErro = document.getElementById('msgErro');
    var msgSuc = document.getElementById('msgSuc');

    campoIdade.style.border = "";
    msgErro.innerHTML = "";
    msgErro.style.display = "none";
    msgSuc.style.display = "none";

    alert(campoIdade.value);
    
    if(campoIdade.value == "" ){
      msgErro.innerHTML = "Preencha a sua idade, o campo está vazio ! <br>";
      msgErro.style.display = "block";
      campoIdade.style.border = "2px solid red";
    }

    else if(campoIdade.value < "0"){
      msgErro.innerHTML = "Preencha a sua idade ! O Valor colocado é negativo :( <br>";
      msgErro.style.display = "block";
      campoIdade.style.border = "2px solid red";
      setTimeout(function(){
        campoIdade.value = "";
      },700); 
    }

    else if(campoIdade.length > "99"){
      msgErro.innerHTML = "Desculpe ! O Valor colocado não está disponível :( <br>";
      msgErro.style.display = "block";
      campoIdade.style.border = "2px solid red";
    }

    else if(campoIdade.value <"20"){
      msgErro.innerHTML = "";
      msgErro.style.display = "none";
      campoIdade.style.border = "2px solid green";
      msgSuc.innerHTML = "Boa, vamos ver suas vacinas até aqui 20! :)"
      msgSuc.style.display = "block";
      campoIdade.value = "";
      console.log(campoIdade.value);
      setTimeout(function(){
        location.href = "vacina.html";
      },1000);
    }

    else if(campoIdade.value >="20" && campoIdade.value <"40"){
      msgErro.innerHTML = "";
      msgErro.style.display = "none";
      campoIdade.style.border = "2px solid green";
      msgSuc.innerHTML = "Boa, vamos ver suas vacinas até aqui 20-40! :)"
      msgSuc.style.display = "block";
      campoIdade.value = "";
      setTimeout(function(){
        location.href = "vacina copy.html";
      },1000);
    }

    else if(campoIdade.value >="40" && campoIdade.value <"60"){
      msgErro.innerHTML = "";
      msgErro.style.display = "none";
      campoIdade.style.border = "2px solid green";
      msgSuc.innerHTML = "Boa, vamos ver suas vacinas até aqui 40-60! :)"
      msgSuc.style.display = "block";
      campoIdade.value = "";
      setTimeout(function(){
        location.href = "vacina copy.html";
      },1000);
    }
    //Teste idade
    // else if(campoIdade.value > "99"){
    //   msgErro.innerHTML = "Preencha a sua idade ! O Valor colocado é acima do esperado :( <br>";
    //   msgErro.style.display = "block";
    //   campoIdade.style.border = "2px solid red";
    //   setTimeout(function(){
    //     campoIdade.value = "";
    //   },700); 
    // }

    //  Idade > 60)
    else {
      msgErro.innerHTML = "";
      msgErro.style.display = "none";
      campoIdade.style.border = "2px solid green";
      msgSuc.innerHTML = "Boa, vamos ver suas vacinas até aqui 99! :)"
      msgSuc.style.display = "block";
      campoIdade.value = "";
      
      setTimeout(function(){
        location.href = "vacina.html";
        console.log(campoIdade);
        console.log("campoIdade");
      },1000);
    }
    console.log("campoIdade");
    console.log(campoIdade);
    //  VAMOS DEIXAR A PARTIR DE UMA IDADE IGUAL PARA TODAS
    //  else{
    //   //  msgErro.innerHTML = "Idade Não Reconhecida ! <br>";
    //   //  alert("Idade Não Reconhecida !")
    //   msgErro.innerHTML = "Idade não disponível para consulta ! <br>";
    //   msgErro.style.display = "block";
    //   campoIdade.style.border = "2px solid red";
    //  }  
  }