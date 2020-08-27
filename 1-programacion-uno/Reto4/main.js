document.getElementById('Cambiar').addEventListener("click", numeroAleatorio);

function numeroAleatorio(){
    let nombre;
    let numero= Math.round(Math.random() * (2 - 1) + 1);
    if(numero=="1")
    {
        nombre = document.getElementById('l1').innerHTML;
    }else{
        nombre = document.getElementById('l2').innerHTML;
    }
    document.querySelector('h2').innerHTML="La Geek Girl seleccionada es: " + nombre;
  }


