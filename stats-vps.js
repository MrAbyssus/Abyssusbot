async function actualizarMonitor() {
    try {
        // Conexión con tu VPS
        const response = await fetch('http://51.77.211.104:3030/api/status');
        const data = await response.json();
        
        const container = document.getElementById('stats-vps-container');
        if (!container) return;

        // Limpiamos el texto de "Cargando..." y ponemos los cuadros
        container.innerHTML = data.clusters.map(c => `
            <div style="background: rgba(255,255,255,0.05); border: 1px solid ${c.status === 'online' ? '#00ffff' : '#ff4444'}; padding: 20px; border-radius: 15px; min-width: 200px; text-align: center;">
                <h3 style="margin: 0; color: #fff; font-family: sans-serif;">Cluster #${c.id}</h3>
                <p style="color: ${c.status === 'online' ? '#00ffff' : '#ff4444'}; font-weight: bold; margin: 10px 0; font-family: sans-serif;">
                    ${c.status === 'online' ? '🟢 ONLINE' : '🔴 OFFLINE'}
                </p>
                <div style="font-size: 14px; color: #a0a0a0; font-family: sans-serif;">
                    <p style="margin: 5px 0;">CPU: ${c.cpu}%</p>
                    <p style="margin: 5px 0;">RAM: ${c.memory} MB</p>
                </div>
            </div>
        `).join('');

    } catch (error) {
        console.error("Error:", error);
        const container = document.getElementById('stats-vps-container');
        if (container) {
            container.innerHTML = `<p style="color: #ff4444;">⚠️ No se pudo conectar con el VPS (Verifica el puerto 3030)</p>`;
        }
    }
}

// Ejecutar al cargar y cada 10 segundos
actualizarMonitor();
setInterval(actualizarMonitor, 10000);
