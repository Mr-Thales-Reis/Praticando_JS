function tabuada() {
    let numero = document.getElementById('txtn').value;
    let resultado = document.getElementById('seltab');

    if (numero.length == 0) {
        window.alert("Por favor, digite um número!");
    } else {
        numero = Number(numero); 
        
        resultado.innerHTML = '';

        for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${numero} X ${i} = ${numero * i}`;
            resultado.appendChild(item);
        }
    }
}


