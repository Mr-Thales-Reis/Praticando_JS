function verificar() {
    var anoDeNascimento = Number(document.getElementById('data_nascimento').value);
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();

    var sexoMasculino = document.getElementById('sexo_masculino').checked;
    var sexoFeminino = document.getElementById('sexo_feminino').checked;

    var textoIdade = document.getElementById('texto_idade');
    var imagem = document.getElementById('img'); 

    let idade = anoAtual - anoDeNascimento;

    if (idade < 12 && sexoMasculino === true){
        textoIdade.innerHTML = `Você é um menino de ${idade} anos.`;
        imagem.src = "./assents/criança_masculino.jpg";
    }else if (idade >= 12 && idade <= 18 && sexoMasculino === true){
        textoIdade.innerHTML = `Você é um jovem de ${idade} anos.`;
        imagem.src = "./assents/adolecente_masculino.jpg";
    }else if( idade > 18 && idade <= 60 && sexoMasculino === true){
        textoIdade.innerHTML = `Você é um homem de ${idade} anos.`;
        imagem.src = "./assents/homem.jpg";
    }else if (idade >= 61 && sexoMasculino === true){
        textoIdade.innerHTML = `Você é um idoso de ${idade} anos.`;
        imagem.src = "./assents/idoso_masculino.jpg";
    }else if (idade < 12 && sexoFeminino === true){
        textoIdade.innerHTML = `Você é uma menina de ${idade} anos.`;
        imagem.src = "./assents/criança_feminino.jpg";
    } else if (idade >= 12 && idade <= 18 && sexoFeminino === true){
        textoIdade.innerHTML = `Você é uma jovem de ${idade} anos.`;
        imagem.src = "./assents/adolecente_feminino.jpg";
    } else if( idade > 18 && idade <= 60 && sexoFeminino === true){
        textoIdade.innerHTML = `Você é uma mulher de ${idade} anos.`;
        imagem.src = "./assents/mulher.jpg";
    } else if (idade >= 61 && sexoFeminino === true){
        textoIdade.innerHTML = `Você é uma idosa de ${idade} anos.`;
        imagem.src = "./assents/idoso_feminino.jpg";
    }else if (anoDeNascimento === 0 || anoDeNascimento > anoAtual ) {
        textoIdade.innerHTML = `Por favor, insira um ano de nascimento válido.`;
        imagem.src = "./assents/erro.jpg";
    }else if (sexoFeminino === false && sexoMasculino === false) {
        textoIdade.innerHTML = `Por favor, selecione um sexo.`;
        imagem.src = "./assents/erro.jpg";
    }
}