function contar() {
    var inicio = document.getElementById("inicio").value;
    var fim = document.getElementById("fim").value;
    var pulo = document.getElementById("passo").value;

    inicio = parseInt(inicio);
    fim = parseInt(fim);
    pulo = parseInt(pulo);

    if (isNaN(inicio) || isNaN(fim) || isNaN(pulo)) {
        alert("Por favor, preencha todos os campos com números válidos.");
    }else{
        for( var i = inicio; i <=fim; i = i + pulo){
            var resultado = document.getElementById("resultado");
            resultado.innerHTML += i + "👉";
        }
        resultado.innerHTML += "🏁";
    }
}