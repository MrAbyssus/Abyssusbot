<script>
    async function actualizarDatos() {
        try {
            // Esta es la URL de tu túnel (la que funciona con HTTPS)
            const respuesta = await fetch('https://works-consequence-patent-inspection.trycloudflare.com/status');
            const datos = await respuesta.json();

            // Aquí metemos los datos del bot en los huecos de arriba
            document.getElementById('cpu-valor').innerText = datos.cpu;
            document.getElementById('ram-valor').innerText = datos.ram;
            document.getElementById('estado').innerText = "🟢 Online";
            document.getElementById('estado').style.color = "#2ecc71";

        } catch (error) {
            console.error("Error al conectar:", error);
            document.getElementById('estado').innerText = "🔴 Desconectado";
            document.getElementById('estado').style.color = "red";
        }
    }

    // Se actualiza solo cada 5 segundos
    setInterval(actualizarDatos, 5000);
    actualizarDatos();
</script>
