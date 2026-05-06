async function actualizarMonitor() {
    try {
        // ⚠️ IMPORTANTE: Cambia 'TU_IP_DE_OVH' por la IP real de tu VPS
        const res = await fetch('http://51.77.211.104:3000/api/stats');
        const clusters = await res.json();

        const container = document.getElementById('stats-vps');
        if (!container) return;

        container.innerHTML = clusters.map(c => `
            <div style="background: #1a1b1e; border: 1px solid #333; padding: 15px; border-radius: 8px; margin: 10px; color: white; font-family: sans-serif;">
                <h3 style="margin: 0 0 10px 0; color: #5865F2;">Cluster ${c.id}</h3>
                <p style="margin: 5px 0;">Estado: ${c.status === 'online' ? '🟢' : '🔴'}</p>
                <p style="margin: 5px 0;">RAM: 🧠 <strong>${c.memory} MB</strong></p>
                <p style="margin: 5px 0;">CPU: ⚡ <strong>${c.cpu}%</strong></p>
            </div>
        `).join('');

    } catch (e) {
        console.error("Error conectando al VPS de Abyssus:", e);
        const container = document.getElementById('stats-vps');
        if (container) container.innerHTML = '<p style="color: red;">⚠️ No se pudo obtener datos del VPS</p>';
    }
}

// Se actualiza cada 10 segundos
setInterval(actualizarMonitor, 10000);
actualizarMonitor();
