<script>
    async function actualizarDashboard() {
        try {
            // USAMOS LA RUTA /API/STATUS PARA RECIBIR DATOS, NO DISEÑO
            const link = 'https://shoes-lamb-busy-anytime.trycloudflare.com/api/status';
            
            const respuesta = await fetch(link);
            const datos = await respuesta.json();

            const contenedor = document.getElementById('lista-clusters'); // El ID de tu div
            
            if (datos.clusters) {
                contenedor.innerHTML = datos.clusters.map(c => `
                    <div class="cluster-card" style="background:#222; padding:15px; margin:10px; border-radius:8px; border-left: 4px solid #0ff;">
                        <h3 style="color:#0ff; margin:0;">CLUSTER ${c.id}</h3>
                        <p style="color:white;">Estado: ${c.status.toUpperCase()}</p>
                        <p style="color:#aaa; font-size:12px;">RAM: ${c.ram || '--'} MB | Uptime: ${c.uptime || '--'}</p>
                    </div>
                `).join('');
                
                document.getElementById('conexion-estado').innerHTML = '🟢 SISTEMA OPERATIVO';
            }
        } catch (error) {
            console.error("Error:", error);
            document.getElementById('conexion-estado').innerHTML = '🔴 FALLO DE COMUNICACIÓN';
        }
    }

    setInterval(actualizarDashboard, 5000);
    actualizarDashboard();
</script>
