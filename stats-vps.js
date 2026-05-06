// Busca donde haces el fetch y cámbialo por esto:
fetch('https://works-consequence-patent-inspection.trycloudflare.com/status')
  .then(response => response.json())
  .then(data => {
    // Aquí es donde tu código actualiza los números en la pantalla
    document.getElementById('tu-id-de-cpu').innerText = data.cpu + '%';
    document.getElementById('tu-id-de-ram').innerText = data.ram + ' MB';
  })
  .catch(error => console.error("Error:", error));
