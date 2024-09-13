function validacao(){

    let tell = document.getElementById("tell").value;
    let email =  document.getElementById("email").value;
    let fName = document.getElementById("fName").value;
    let lName =document.getElementById("lName").value;

/////////////////////////////////////////////////////////////////

   if(tell != 300){
    alert("telefone invalido")
    
   }

   if(email != "20mata@gmail.com"){
    alert("email invalido")
    
   }
   
   if(fName != "vitor"){
    alert("nome errado ou invalido")
    
   }

   if(lName != "leandro"){
    alert("sobrenome errado ou invalido")
    
   }

    alert(`seu telefone ${tell}:\nseu email ${email}:\nseu primeiro nome:${fName} \nseu sobrenome:${lName}`);

   //fin

}

