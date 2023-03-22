// Comprobar si ya se ha visitado la página
if(localStorage.getItem('visitas')){
    var visitas = parseInt(localStorage.getItem('visitas'));
  }else{
    var visitas = 0;
  }
  
  // Incrementar el contador de visitas y almacenarlo en el navegador
  visitas++;
  localStorage.setItem('visitas', visitas);
  
  // Mostrar el número de visitas en la página
  document.getElementById('contador-visitas').innerHTML = visitas;

