// Ejemplo de cómo leerlo en stats-vps.js
const response = await fetch('http://51.77.211.104:3030/api/status');
const data = await response.json();

// Ahora puedes usar data.clusters para mostrar si el Cluster 0 o 1 están caídos
console.log(data.clusters);
