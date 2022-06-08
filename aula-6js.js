
 // comentário // 
    // E entrada ---> P processamento ---> S saida

    //Algoritimo 
    
    var nome = "Edir";   // "" aspas é STRING texto
    var idade = 24;  // variavel numerica - NUMBER - integer (inteiro)
    var peso = 43.7; // NUMBER - float 
    var acordado = true; // valor boleano BOOLEAN ou BOLL ( so aceita VERDADEIRO ou FALSO)

  // alert("Ola " + nome + "!");


 // > - maior 
 // < - menor 
 // == - igual
 // >= - maior igual
 // <= - menor igual
 // != - diferente


  if (idade > peso) 
  {
       console.log("verdade");
  } else{
       console.log("falso"); 
  }


 // var texto = prompt("digite algo");
 // console.log(texto);


  //exercicio 1
  // pepça 2 numeros e retorne o maior
//peça 3 nuumeros e dizer o maior e tambem o menor 

var num1 = prompt("Digite o num 1");
var num2 = prompt("Digite o num 2");
var num3 = prompt("Digite o num 3");

// Maior
if (num1 > num2)
{   
    if (num1 > num3)
    {
        console.log("O numero: " + num1 + " é o maior");
    } else
    {
        console.log("O numero: " + num3 + " é o maior");
    }
} else 
{
    if (num2 > num3)
    {
        console.log("O numero: " + num2 + " é o maior");
    } else 
    {
        console.log("O numero: " + num3 + " é o maior");
    }
}

// Menor
if (num1 < num2)
{
    if (num1 < num3 )
    {
        console.log("O numero: " + num1 + " é o menor");
    } else 
    {
        console.log("O numero: " + num3 + " é o menor");
    }
    
} else 
{
    if (num2 < num3)
    {
        console.log("O numero: " + num2 + " é o menor");
    } else
    {
        console.log("O numero: " + num3 + " é o menor");
    }
}