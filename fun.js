// E -> P -> S

function soma(n1, n2)
{
    var total = parseInt(n1) + parseInt(n2);
    return total;
}



function clique()
{
    var num1 = prompt("Digite o num 1");
    var num2 = prompt("Digite o num 2");

    var resultado = soma(num1, num2);

    console.log(resultado);
}



function somar() 
{
    var input1 = document.getElementById("numero-1");
    

    var input2 = document.getElementById("numero-2");
    
    var valor = soma(input1.value, input2.value);

    var resultado = document.getElementById("resultadoid");
    resultado.innerHTML = valor;

}

function tratar(evento)
{

    if (evento.keyCode <= 48 || evento.keyCode >= 57)
    {
        // evita o evento padrão
        evento.preventDefault();
        
    }
}

var input1 = document.getElementById("numero-1");

input1.addEventListener("keydown", tratar);