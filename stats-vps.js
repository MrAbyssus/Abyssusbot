<div id="status-container" style="font-family: sans-serif; color: white; text-align: center;">
    <h1>Estatus de Abyssus Bot</h1>
    <p id="conexion-estado">Estado: <span style="color: red;">🔴 Desconectado</span></p>
    
    <div id="lista-clusters" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;"></div>
</div>

<script>
    async function actualizarDashboard() {
        try {
            // USAMOS TU NUEVA URL ACTIVA
            const link = 'https://shoes-lamb-busy-anytime.trycloudflare.com/status';
            
            const respuesta = await fetch(link);
            const datos = await respuesta.json();

            const contenedor = document.getElementById('lista-clusters');
            
            // Si el bot responde con clusters (el array que configuraste)
            if (datos.clusters && datos.clusters.length > 0) {
                contenedor.innerHTML = datos.clusters.map(c => `
                    <div style="background: #252525; border: 1px solid #444; padding: 15px; border-radius: 10px; min-width: 160px;">
                        <h3 style="margin: 0; color: #00ffcc;">Cluster ${c.id}</h3>
                        <p style="margin: 8px 0 0 0;">📟 RAM: ${c.ram} MB</p>
                        <p style="margin: 5px 0 0 0;">⏱️ Uptime: ${c.uptime}</p>
                    </div>
                `).join('');
                
                document.getElementById('conexion-estado').innerHTML = 'Estado: <span style="color: #00ff00;">🟢 En línea</span>';
            }

        } catch (error) {
            console.error("Error de conexión:", error);
            document.getElementById('conexion-estado').innerHTML = 'Estado: <span style="color: red;">🔴 Desconectado (Revisa el VPS)</span>';
        }
    }

    // Se actualiza cada 5 segundos para ver los cambios en tiempo real
    setInterval(actualizarDashboard, 5000);
    actualizarDashboard();
</script>
