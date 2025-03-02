document.addEventListener('DOMContentLoaded', function () {
    const fechaObjetivo = new Date();
    fechaObjetivo.setDate(9);
    fechaObjetivo.setMonth(2);
    fechaObjetivo.setHours(20, 0, 0, 0);

    function actualizarContador() {
        const ahora = new Date();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            document.querySelector('.contador-contenedor').innerHTML =
                '<div class="alert alert-danger p-2 mb-0">¡El partido está en juego!</div>';
            return;
        }

        const horas = Math.floor(diferencia / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('contador-horas').textContent = horas.toString().padStart(2, '0');
        document.getElementById('contador-minutos').textContent = minutos.toString().padStart(2, '0');
    }

    actualizarContador();

    setInterval(actualizarContador, 60000);
});