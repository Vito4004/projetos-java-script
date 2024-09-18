function randow(){

let num = innerHTML =
Math.floor(Math.random() * 11);

let num2 =document.getElementById("num2").value;

if(num == num2){
    document.getElementById("resposta").style.color="green";
    document.getElementById("resposta").innerHTML= num 

}else{
    document.getElementById("resposta").style.color="red";
    document.getElementById("resposta").innerHTML= num 
}

}
/*
codigo pra gerar um numero aleatorio

document.getElementById("resposta").innerHTML =
    Math.floor(Math.random() * 11);
*/