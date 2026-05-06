// stats-vps.js
async function fetchStats() {
    try {
        const res = await fetch('http://51.77.211.104:3000/api/stats');
        const data = await res.json();
        console.log("Datos recibidos:", data);
        // ... aquí tu lógica para mostrarlo en el HTML
    } catch (err) {
        console.error("Error al obtener stats:", err);
    }
}
