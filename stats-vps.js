async function actualizarMonitor() {
    try {
        // 1. Llamamos a tu VPS (Puerto 3030)
        const response = await fetch('[http://51.77.211.104:3030/api/status](http://51.77.211.104:3030/api/status)');
        const data = await response.json();
        
        // 2. Buscamos el lugar en tu HTML donde se pondrán los cuadros
        const container = document.getElementById('stats-vps-container');
        if (!container) return;

        // 3. Dibujamos cada cluster que venga en el JSON
        container.innerHTML = data.clusters.map(c => `
            <div style="background: rgba(2```

---

### 2. ¿Por qué esto ya no debería fallar?
Anteriormente, la página web te daba error de **CORS** (bloqueo de seguridad). Con el código que pusimos en el paso anterior en el VPS (`app.use(cors())`), ahora tu VPS le da "permiso" a tu página de GitHub para leer los datos.

### 3. Resumen de la conexión
*   **VPS:** Procesa la información de los clusters y la RAM, y la deja "colgada" en `http://51.77.211.104:3030/api/status`.
*   **Página Web:** Entra a esa dirección');
        if (container) container.innerHTML = "<p style='color: red;'>Error: No se pudo conectar con el VPS</p>";
    }
}

// Actualizar cada 10 segundos
setInterval(actualizarMonitor, 10000);
actualizarMonitor();
