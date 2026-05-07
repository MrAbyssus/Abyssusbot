<script>
    // BASE DE DATOS PROCESADA DESDE TU HTML
    const comandos = [
        // --- MULTAS & UPDATE ---
        { n: "/multas toggle", d: "💸 Sistema de multas ahora configurable en tiempo real", c: "moderacion", new: true },
        { n: "/multas set", d: "Cambiar monto de multa", c: "moderacion" },
        { n: "/multas ver", d: "Ver configuración actual", c: "moderacion" },
        { n: "/multas permisos", d: "Gestionar roles autorizados", c: "moderacion" },
        { n: "/multas historial", d: "Ver historial de multas", c: "moderacion" },
        { n: "/multas dm", d: "Activar o desactivar DM de multas", c: "moderacion" },

        // --- TICKETS & SERVER ---
        { n: "/serverstats desactivar", d: "Desactiva los canales de estadísticas", c: "moderacion" },
        { n: "/ticket", d: "Crea un ticket de soporte", c: "moderacion" },
        { n: "/settickets", d: "Configura el sistema de tickets", c: "moderacion" },

        // --- MODERACIÓN CORE ---
        { n: "/ban", d: "Banea a un usuario", c: "moderacion" },
        { n: "/kick", d: "Expulsa a un usuario", c: "moderacion" },
        { n: "/warn", d: "Advierte a un usuario", c: "moderacion" },
        { n: "/view-warnings", d: "Muestra advertencias", c: "moderacion" },
        { n: "/clearwarning", d: "Elimina advertencias por ID", c: "moderacion" },
        { n: "/purge", d: "Borra mensajes por cantidad", c: "moderacion" },
        { n: "/mute", d: "Silencia temporalmente", c: "moderacion" },
        { n: "/unmute", d: "Quita el silencio", c: "moderacion" },
        { n: "/timemute", d: "Silencia por tiempo definido", c: "moderacion" },

        // --- ROLES & AYUDA ---
        { n: "/ayuda", d: "Solicita asistencia en el servidor", c: "moderacion" },
        { n: "/rol crear", d: "Crea nuevo rol con opciones avanzadas", c: "moderacion" },
        { n: "/rol eliminar", d: "Elimina rol del servidor", c: "moderacion" },

        // --- SISTEMA 911 ---
        { n: "/911", d: "Sistema de alertas y moderación", c: "moderacion" },
        { n: "/911 enviar", d: "Envía una alerta al equipo", c: "moderacion" },
        { n: "/911 estado", d: "Consulta el estado de tu alerta", c: "moderacion" },
        { n: "/911 resolver", d: "Marca una alerta como resuelta", c: "moderacion" },

        // --- LOGS & CONFIG ---
        { n: "/modlogs", d: "Consulta historial de moderación", c: "moderacion" },
        { n: "/modlogs usuario", d: "Ver historial de moderación de un usuario", c: "moderacion" },
        { n: "/modlogs config", d: "Establece o restablece el canal de logs", c: "moderacion" },
        { n: "/modlogs global", d: "Ver historial completo del servidor", c: "moderacion" },
        { n: "/modlogs tipo", d: "Filtrar historial por tipo de acción", c: "moderacion" },
        { n: "/modlogs borrar", d: "Eliminar todos los registros del servidor", c: "moderacion" },
        { n: "/configlogs", d: "Consulta historial de usuario", c: "moderacion" },
        { n: "/config setmute", d: "Define el rol para silenciar", c: "moderacion" },
        { n: "/confess set", d: "Configura canal de confesiones", c: "moderacion" },
        { n: "/reportar", d: "Recibe denuncias de usuarios", c: "moderacion" },

        // --- AUTOROLES ---
        { n: "/autoroles set", d: "📌 Establece el rol automático", c: "moderacion" },
        { n: "/autoroles clear", d: "🧹 Elimina la configuración del rol automático", c: "moderacion" },
        { n: "/autoroles view", d: "🔍 Muestra el rol automático actual", c: "moderacion" },
        { n: "/autoroles asignar", d: "🎯 Asigna el rol automático al usuario actual", c: "moderacion" },

        // --- NSFW ---
        { n: "/nsfw cambiar", d: "Activa o desactiva el estado NSFW en el canal", c: "nsfw" },
        { n: "/nsfw listar", d: "📋 Muestra todos los canales NSFW activos", c: "nsfw" },
        { n: "/nsfw reset", d: "🧹 Elimina todos los flags NSFW del servidor", c: "nsfw" }
    ];

    function render(filtro = 'all', busqueda = '') {
        const container = document.getElementById('commands-container');
        container.innerHTML = '';
        
        const filtrados = comandos.filter(cmd => {
            const matchCat = filtro === 'all' || cmd.c === filtro;
            const matchSearch = cmd.n.toLowerCase().includes(busqueda.toLowerCase()) || 
                                cmd.d.toLowerCase().includes(busqueda.toLowerCase());
            return matchCat && matchSearch;
        });

        filtrados.forEach(cmd => {
            const isNew = cmd.new ? '<span style="color:#38bdf8; font-size:0.7rem;">⚡ NEW</span>' : '';
            container.innerHTML += `
                <div class="command-card">
                    <div class="cmd-name">${cmd.n} ${isNew}</div>
                    <div class="cmd-desc">${cmd.d}</div>
                    <div class="cmd-footer">
                        <span class="cmd-tag">${cmd.c}</span>
                        <button onclick="copyCmd('${cmd.n}')" style="background:none; border:1px solid #333; color:#fff; cursor:pointer; padding:4px 8px; border-radius:4px; font-size:0.7rem;">Copiar</button>
                    </div>
                </div>
            `;
        });
    }

    function copyCmd(text) {
        navigator.clipboard.writeText(text);
        alert('Copiado: ' + text);
    }

    function filter(cat, el) {
        document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
        render(cat, document.getElementById('search').value);
    }

    document.getElementById('search').addEventListener('input', (e) => {
        const activeCat = document.querySelector('.category.active').innerText.toLowerCase();
        const cat = activeCat === 'todos' ? 'all' : (activeCat === 'moderación' ? 'moderacion' : activeCat);
        render(cat, e.target.value);
    });

    render();
</script>
