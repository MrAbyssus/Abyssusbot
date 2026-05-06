async function actualizarMonitor() {
    try {
        const response = await fetch('http://51.77.211.104:3030/api/status');
        const data = await response.json();
        
        // "data.clusters" ahora contiene la información de PM2
        const listaClusters = data.clusters; 

        const container = document.getElementById('stats-vps');
        container.innerHTML = listaClusters.map(c => `
            <div class="card">
                <h4>Cluster ${c.id}</h4>
                <p>Estado: ${c.status === 'online' ? '🟢' : '🔴'}</p>
                <p>CPU: ${c.cpu}% | RAM: ${c.memory} MB</p>
            </div>
        `).join('');
    } catch (e) {
        console.error("Error:", e);
    }
}
setInterval(actualizarMonitor, 5000);
