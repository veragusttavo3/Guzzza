
 // Inicializa el contador
            let contador = localStorage.getItem('contador')? parseInt(localStorage.getItem('contador')) : 0;
            
            // Incrementa el contador
            contador++;
            
            // Guarda el nuevo valor en localStorage
            localStorage.setItem('contador', contador);
            // Muestra el contador en la página
            document.getElementById('contador').textContent = contador;
 