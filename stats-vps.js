async function actualizarMonitor() {
    try {
        // Usamos tu IP real
        const response = await fetch('http://51.77.211.104:3030/api/stats');
        
        if (!response.ok) throw new Error('Error en la respuesta del servidor');
        
        const clusters = await response.json();

        const container = document.getElementById('stats-vps');
        if (!container) return;

        // Limpiamos y dibujamos los clusters
        container.innerHTML = clusters.map(c => `
            <div style="background: #1a1b1e; border: 1px solid #333; padding: 15px; border-radius: 8px; margin: 10px; color: white; font-family: sans-serif;">
                <h3 style="margin: 0 0 10px 0; color: #5865F2;">Cluster ${c.id}</h3>
                <p style="margin: 5px 0;">Estado: ${c.status === 'online' ? '🟢' : '🔴'}</p>
                <p style="margin: 5px 0;">RAM: 🧠 <strong>${c.memory} MB</strong></p>
                <p style="margin: 5px 0;">CPU: ⚡ <strong>${c.cpu}%</strong></p>
            </div>
        `).join('');

    } catch (e) {
        console.error("Error conectando al VPS:", e);
        const container = document.getElementById('stats-vps');
        if (container) {
            container.innerHTML = '<p style="color: #ff4747;">⚠️ No se pudo conectar con el servidor de monitoreo.</p>';
        }
    }
}

// Actualizar cada 10 segundos
setInterval(actualizarMonitor, 10000);
actualizarMonitor();
