async function actualizarMonitor() {
    try {
        const response = await fetch('http://51.77.211.104:3000/api/stats');
        const clusters = await response.json();
        
        const container = document.getElementById('stats-vps');
        if (!container) return;

        // Esto dibuja lo que vimos en la Captura de pantalla 2026-05-06 013452.jpg
        container.innerHTML = clusters.map(c => `
            <div style="background: #1a1b1e; padding: 15px; border-radius: 8px; margin: 10px; color: white;">
                <h3>Cluster ${c.id}</h3>
                <p>Estado: ${c.status === 'online' ? '🟢 Online' : '🔴 Stopped'}</p>
                <p>RAM: ${c.memory} MB</p>
                <p>CPU: ${c.cpu}%</p>
            </div>
        `).join('');
    } catch (e) {
        console.error("Error:", e);
    }
}
setInterval(actualizarMonitor, 10000);
actualizarMonitor();
