window.onload = function clima(){
    var titulo = document.getElementById('titulo');
    var imagem = document.getElementById('imagem');
    
    var horas = new Date().getHours();

    if (horas < 12) {
        titulo.innerHTML = `Bom dia! <br> Agora são ${horas} horas`;
        imagem.src = "./assents/manha.jpg";
        document.body.style.backgroundColor = "yellow";
    }else if (horas < 18) {
        titulo.innerHTML = `Boa tarde! <br> Agora são ${horas} horas`;
        imagem.src = "./assents/tarde.jpg";
        document.body.style.backgroundColor = "orange";
    }else {
        titulo.innerHTML = `Boa Noite! <br> Agora são ${horas} horas`;
        imagem.src = "./assents/noite.jpg";
        document.body.style.backgroundColor = "black";
    }
}


