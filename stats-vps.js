<script>
    async function obtenerDatos() {
        try {
            const res = await fetch('https://works-consequence-patent-inspection.trycloudflare.com/status');
            const data = await res.json();

            // 1. Limpiamos el contenedor de clusters antes de poner los nuevos
            const contenedor = document.getElementById('clusters-container');
            contenedor.innerHTML = ''; 

            // 2. Recorremos cada cluster que envía tu bot
            data.clusters.forEach(cluster => {
                contenedor.innerHTML += `
                    <div class="card">
                        <h4>Cluster ${cluster.id}</h4>
                        <p>RAM: ${cluster.ram} MB</p>
                        <p>Uptime: ${cluster.uptime}</p>
                    </div>
                `;
            });

            document.getElementById('status-text').innerText = "🟢 En línea";
            document.getElementById('status-text').style.color = "#00ff00";

        } catch (error) {
            document.getElementById('status-text').innerText = "🔴 Error de conexión (Revisa el túnel)";
            document.getElementById('status-text').style.color = "red";
        }
    }

    setInterval(obtenerDatos, 5000);
    obtenerDatos();
</script>
