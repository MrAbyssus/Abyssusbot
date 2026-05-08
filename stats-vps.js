<script>
    // Variable para evitar múltiples peticiones simultáneas si el servidor va lento
    let estaCargando = false;

    async function actualizarDashboard() {
        if (estaCargando) return;
        estaCargando = true;

        try {
            // Usamos ruta relativa para que funcione con cualquier URL de Cloudflare
            // Si esto falla, cambia '/status' por la URL completa actual
            const url = '/status'; 
            
            const res = await fetch(url);
            
            if (!res.ok) throw new Error('Error en la respuesta del servidor');
            
            const data = await res.json();

            const lista = document.getElementById('lista-clusters');
            const estadoConexion = document.getElementById('conexion-estado');

            if (data && data.clusters) {
                lista.innerHTML = data.clusters.map(c => `
                    <div style="background:#1a1a1a; padding:15px; margin:8px; border-radius:8px; border-left: 5px solid #00ffff; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">
                        <h4 style="margin:0; color:#00ffff; font-family: monospace; letter-spacing: 1px;">CLUSTER ${c.id}</h4>
                        <p style="margin:5px 0 0 0; font-size:13px; color: #bbb;">
                            ESTADO: <span style="color:${c.status === 'online' ? '#00ff00' : '#ff4444'}">${c.status.toUpperCase()}</span>
                        </p>
                    </div>
                `).join('');
                
                if (estadoConexion) {
                    estadoConexion.innerHTML = '<span style="color:#00ff00; font-weight:bold;">🟢 SISTEMA ONLINE</span>';
                }
            }
        } catch (e) {
            console.error("Error al actualizar dashboard:", e);
            const estadoConexion = document.getElementById('conexion-estado');
            if (estadoConexion) {
                estadoConexion.innerHTML = '<span style="color:#ff4444; font-weight:bold;">🔴 ERROR DE CONEXIÓN</span>';
            }
        } finally {
            estaCargando = false;
        }
    }

    // Actualiza cada 5 segundos
    setInterval(actualizarDashboard, 5000);
    
    // Primera carga al abrir la página
    document.addEventListener('DOMContentLoaded', actualizarDashboard);
</script>
