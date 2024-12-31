 // JavaScript para mover el texto
 const h1 = document.getElementById('miTexto');

 h1.addEventListener('mousedown', function(event) {
     let offsetX = event.clientX - h1.getBoundingClientRect().left;
     let offsetY = event.clientY - h1.getBoundingClientRect().top;
 
     function moverTexto(mouseMoveEvent) {
         h1.style.left = mouseMoveEvent.clientX - offsetX + 'px';
         h1.style.top = mouseMoveEvent.clientY - offsetY + 'px';
     }
 
     function soltarTexto() {
         document.removeEventListener('mousemove', moverTexto);
         document.removeEventListener('mouseup', soltarTexto);
     }
 
     document.addEventListener('mousemove', moverTexto);
     document.addEventListener('mouseup', soltarTexto);
 });
             // Inicializa el contador
             let contador = localStorage.getItem('contador') ? parseInt(localStorage.getItem('contador')) : 0;
             
             // Incrementa el contador
             contador++;
             
             // Guarda el nuevo valor en localStorage
             localStorage.setItem('contador', contador);
             
             // Muestra el contador en la página
             document.getElementById('contador').textContent = contador;
 
             