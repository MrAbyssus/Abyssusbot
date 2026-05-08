<script>
    async function actualizarDashboard() {
        try {
            // MUY IMPORTANTE: La URL debe terminar en /api/status
            const url = 'https://newsletters-seas-reason-accommodations.trycloudflare.com/status';
            
            const res = await fetch(url);
            const data = await res.json();

            const lista = document.getElementById('lista-clusters'); // Asegúrate que este ID exista
            
            if (data.clusters) {
                lista.innerHTML = data.clusters.map(c => `
                    <div style="background:#222; padding:10px; margin:5px; border-radius:5px; border-left: 4px solid #0ff;">
                        <h4 style="margin:0; color:#0ff;">CLUSTER ${c.id}</h4>
                        <p style="margin:0; font-size:14px;">ESTADO: ${c.status.toUpperCase()}</p>
                    </div>
                `).join('');
                
                document.getElementById('conexion-estado').innerHTML = '<span style="color:#00ff00">🟢 CONECTADO</span>';
            }
        } catch (e) {
            document.getElementById('conexion-estado').innerHTML = '<span style="color:red">🔴 DESCONECTADO</span>';
        }
    }
    setInterval(actualizarDashboard, 5000);
    actualizarDashboard();
</script>

