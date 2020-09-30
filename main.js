 const name = prompt ("Qual seu primeiro nome?");

if (prompt ("Gostaria de responder o nosso quiz?" + ("\n") + "1- Sim. " + ("\n") + "2- Não.") == "1"){

    if (prompt ("1. Qual o livro mais vendido no mundo a seguir à Bíblia?" + ("\n") + "Digite o número da resposta correta." + ("\n") + "1. O Senhor dos Anéis" + ("\n") + "2. A Cabana" + ("\n") + "3. Dom Quixote") == "3"){
        document.getElementById("questionCorrect1").innerHTML= "RESPOSTA 1";
    }else{
        document.getElementById("questionIncorrect1").innerHTML= "RESPOSTA 1";
    }
    
    if (prompt ("2. De quem é a famosa frase “Penso, logo existo”? Digite o número da resposta correta."  + ("\n") + "1. Sócrates" + ("\n") + "2. Platão" + ("\n") + "3. Descartes") == "3"){
        document.getElementById("questionCorrect2").innerHTML= "RESPOSTA 2";
    }else{
        document.getElementById("questionIncorrect2").innerHTML= "RESPOSTA 2";
    }
    
    if (prompt ("3. Quantas casas decimais tem o número pi? Digite o número da resposta correta." + ("\n") + "1. Centenas" + ("\n") + "2. Milhares" + ("\n") + "3. Infinitas") == "3"){
        document.getElementById("questionCorrect3").innerHTML= "RESPOSTA 3";
    }else{
        document.getElementById("questionIncorrect3").innerHTML= "RESPOSTA 3";
    }
    
}else{
    alert ("Obrigada por acessar nosso site!");
}

document.getElementById("name").innerHTML= "OLÁ! SEJA BEM VINDA  " + name.toUpperCase() + "!";   