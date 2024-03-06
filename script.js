document.addEventListener('DOMContentLoaded', function() {
    const cryptoCount = document.getElementById('cryptoCount');
    let totalCrypto = parseInt(localStorage.getItem('cryptoCount')) || 0;
    let intervalTime = 3000; // Intervalo de tiempo inicial
    let ping = 0;
    let isRepairing = false;

    // Función para simular el símbolo del sistema
    function simulateRepair() {
        isRepairing = true;
        alert('Error: El servidor ha alcanzado un ping de 800. Se realizará una reparación.');
        
        // Detener la simulación por 5 segundos
        setTimeout(function() {
            alert('Reparación completada. El sitio web volverá a funcionar.');
            isRepairing = false;
        }, 5000);
    }

    setInterval(function() {
        if (!isRepairing) {
            // Aumentar el ping de manera aleatoria
            ping += Math.floor(Math.random() * 100) + 1;

            if (ping >= 800) {
                // Si el ping alcanza 800, simular la reparación y reiniciar el ping
                simulateRepair();
                ping = 0;
            } else {
                // Si el ping es inferior a 800, continuar minando criptomonedas
                totalCrypto += Math.floor(Math.random() * 10) + 1;
                cryptoCount.textContent = totalCrypto;
                localStorage.setItem('cryptoCount', totalCrypto); // Guardar el total en el almacenamiento local
                intervalTime -= 100; // Reducir el intervalo de tiempo
            }
        }
    }, intervalTime);
});