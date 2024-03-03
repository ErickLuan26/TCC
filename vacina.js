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

    if(campoIdade.value == ""){
      msgErro.innerHTML = "Preencha a sua idade ! <br>";
      msgErro.style.display = "block";
      campoIdade.style.border = "2px solid red";
    }

    if(campoIdade.value != ""){
      msgErro.innerHTML = "";
      msgErro.style.display = "none";
      msgSuc.innerHTML = "Boa, vamos ver suas vacinas até aqui ! :)"
      msgSuc.style.display = "block";
      campoIdade.value = "";
      setTimeout(function(){
        location.href = "vacina.html";
      },1000);
    }
  }