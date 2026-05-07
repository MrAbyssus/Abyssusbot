<script>
    const comandos = [
        // --- MODERACIÓN & STAFF ---
        { n: "/multas toggle", d: "💸 Configura el sistema de multas en tiempo real", c: "moderacion" },
        { n: "/multas set", d: "Cambiar monto de multa por infracción", c: "moderacion" },
        { n: "/multas ver", d: "Ver configuración actual de multas", c: "moderacion" },
        { n: "/multas permisos", d: "Gestionar roles autorizados para multar", c: "moderacion" },
        { n: "/multas historial", d: "Ver historial de sanciones económicas", c: "moderacion" },
        { n: "/multas dm", d: "Activar/Desactivar avisos por mensaje directo", c: "moderacion" },
        { n: "/ban", d: "Banea a un usuario de forma permanente", c: "moderacion" },
        { n: "/kick", d: "Expulsa a un usuario del servidor", c: "moderacion" },
        { n: "/warn", d: "Advierte a un usuario por mal comportamiento", c: "moderacion" },
        { n: "/view-warnings", d: "Muestra la lista de advertencias de un usuario", c: "moderacion" },
        { n: "/clearwarning", d: "Elimina una advertencia específica por su ID", c: "moderacion" },
        { n: "/purge", d: "Borra mensajes masivamente (hasta 100)", c: "moderacion" },
        { n: "/mute", d: "Silencia a un usuario del servidor", c: "moderacion" },
        { n: "/unmute", d: "Devuelve la voz a un usuario silenciado", c: "moderacion" },
        { n: "/timemute", d: "Silencia por un tiempo definido (ej: 10m, 1h)", c: "moderacion" },
        { n: "/911 enviar", d: "Envía una alerta de emergencia al equipo de staff", c: "moderacion" },
        { n: "/911 estado", d: "Consulta si tu reporte ha sido atendido", c: "moderacion" },
        { n: "/911 resolver", d: "Marca una alerta como resuelta (Staff)", c: "moderacion" },
        { n: "/ticket", d: "Crea un ticket de soporte interactivo", c: "moderacion" },
        { n: "/settickets", d: "Configura el sistema de tickets en el servidor", c: "moderacion" },
        { n: "/modlogs config", d: "Establece el canal de registros de moderación", c: "moderacion" },
        { n: "/modlogs usuario", d: "Ver historial de acciones contra un usuario", c: "moderacion" },
        { n: "/modlogs borrar", d: "Elimina todos los registros del servidor", c: "moderacion" },
        { n: "/confess set", d: "Configura el canal para confesiones anónimas", c: "moderacion" },
        { n: "/reportar", d: "Recibe denuncias directas de los usuarios", c: "moderacion" },
        { n: "/autoroles set", d: "📌 Establece el rol automático al entrar", c: "moderacion" },
        { n: "/autoroles view", d: "🔍 Muestra la configuración de roles actual", c: "moderacion" },
        { n: "/autoroles asignar", d: "🎯 Asigna el rol automático manualmente", c: "moderacion" },
        { n: "/ayuda", d: "Solicita asistencia inmediata en el servidor", c: "moderacion" },
        { n: "/serverstats desactivar", d: "Desactiva los canales automáticos de estadísticas", c: "moderacion" },

        // --- ECONOMÍA ---
        { n: "/balance", d: "Consulta tu saldo actual de AbyCoins", c: "economia" },
        { n: "/daily", d: "Reclama tu recompensa diaria gratuita", c: "economia" },
        { n: "/work", d: "Realiza trabajos para ganar monedas", c: "economia" },
        { n: "/shop", d: "Muestra la tienda disponible en el servidor", c: "economia" },
        { n: "/shopadd", d: "Agregar un producto a la tienda (Admin)", c: "economia" },
        { n: "/shopremove", d: "Remover un producto de la tienda (Admin)", c: "economia" },
        { n: "/shoplist", d: "Muestra la lista detallada de productos", c: "economia" },
        { n: "/shopbuy", d: "Comprar un producto de la tienda", c: "economia" },
        { n: "/shopsearch", d: "Buscar un producto por nombre o ID", c: "economia" },
        { n: "/give", d: "Dar dinero de tu saldo a otro usuario", c: "economia" },
        { n: "/inventory", d: "Revisa los artículos que posees", c: "economia" },
        { n: "/reset", d: "Reiniciar el sistema de economía (Admin)", c: "economia" },
        { n: "/limosna", d: "Pedir limosna diaria o a un usuario", c: "economia" },
        { n: "/banco depositar", d: "Guarda tus AbyCoins en el banco", c: "economia" },
        { n: "/banco retirar", d: "Retira tus ahorros de la cuenta bancaria", c: "economia" },
        { n: "/banco consultar", d: "Consulta tu estado de cuenta y ahorros", c: "economia" },
        { n: "/equipar", d: "Usa un artículo de tu inventario mediante su ID", c: "economia" },
        { n: "/leaderboard", d: "📊 Ranking local de los más ricos del servidor", c: "economia" },
        { n: "/rob", d: "Intenta robar dinero a otro usuario (con riesgo)", c: "economia" },
        { n: "/pay", d: "Envía monedas de forma rápida a un amigo", c: "economia" },

        // --- DIVERSIÓN & JUEGOS ---
        { n: "/roleta", d: "🎡 Prueba tu suerte en la ruleta con castigos", c: "diversion" },
        { n: "/chismosos", d: "🗣️ Rumores falsos para entretener al servidor", c: "diversion" },
        { n: "/sabio", d: "🧘 Frases filosóficas totalmente absurdas", c: "diversion" },
        { n: "/emoji", d: "🎭 El bot te responde exclusivamente con emojis", c: "diversion" },
        { n: "/drama", d: "🎬 Simula una situación grave (modo teatral)", c: "diversion" },
        { n: "/quien", d: "🎲 Elige a un usuario aleatorio del canal", c: "diversion" },
        { n: "/consejo", d: "💡 Consejo aleatorio: sabio o muy sarcástico", c: "diversion" },
        { n: "/duelo", d: "⚔️ Inicia un duelo ficticio entre dos usuarios", c: "diversion" },
        { n: "/califica", d: "⚖️ El bot califica lo que quieras con humor", c: "diversion" },
        { n: "/apodo", d: "🏷️ Genera un apodo aleatorio y original", c: "diversion" },
        { n: "/karma", d: "✨ Muestra el karma acumulado por tus acciones", c: "diversion" },
        { n: "/8ball", d: "🔮 Pregunta a la bola mágica de Abyssus", c: "diversion" },
        { n: "/coinflip", d: "🪙 Lanza una moneda virtual (Cara o Cruz)", c: "diversion" },
        { n: "/gracias", d: "🙏 Agradece a alguien y súmale puntos de karma", c: "diversion" },
        { n: "/roast", d: "🔥 Broma sarcástica o burla ligera", c: "diversion" },
        { n: "/juego", d: "🎮 Trivia, PPT, Adivinanzas o Dados", c: "diversion" },
        { n: "/ttt reto", d: "❌ Reta a alguien a Tres en Raya", c: "diversion" },
        { n: "/ttt random", d: "⭕ Partida rápida de Tres en Raya", c: "diversion" },
        { n: "/ttt ranking", d: "🏆 Ranking de los mejores en Tres en Raya", c: "diversion" },

        // --- INTERACCIONES & PETS ---
        { n: "/pet invocar", d: "✨ Invoca una criatura emocional", c: "utilidad" },
        { n: "/pet jugar", d: "🎾 Interactúa con tu mascota", c: "utilidad" },
        { n: "/pet alimentar", d: "🍎 Alimenta a tu mascota", c: "utilidad" },
        { n: "/pet estado", d: "📊 Consulta las estadísticas de tu mascota", c: "utilidad" },
        { n: "/angry", d: "💢 Expresa tu enfado en el chat", c: "interaccion" },
        { n: "/blush", d: "😊 Te sonrojas", c: "interaccion" },
        { n: "/shrug", d: "🤷 ¯\\_(ツ)_/¯ No tienes idea", c: "interaccion" },
        { n: "/thinking", d: "🤔 Piensas profundamente", c: "interaccion" },

        // --- CONFIGURACIÓN & NIVELES ---
        { n: "/setwelcome canal", d: "Canal para los mensajes de bienvenida", c: "configuracion" },
        { n: "/setwelcome mensaje", d: "Contenido del mensaje de bienvenida", c: "configuracion" },
        { n: "/setwelcome rol", d: "Asigna un rol automático al unirse", c: "configuracion" },
        { n: "/configniveles", d: "⚙️ Configura el sistema de niveles y XP", c: "configuracion" },
        { n: "/rank", d: "🎖️ Muestra tu tarjeta de nivel y XP actual", c: "utilidad" },
        { n: "/nivel leaderboard", d: "🏆 Ranking de usuarios con más nivel", c: "utilidad" },

        // --- UTILIDAD & NSFW ---
        { n: "/ping", d: "Verifica la latencia de Abyssus", c: "utilidad" },
        { n: "/serverinfo", d: "Estadísticas generales del servidor", c: "utilidad" },
        { n: "/nsfw cambiar", d: "Activa/Desactiva el estado NSFW en el canal", c: "nsfw" },
        { n: "/nsfw listar", d: "📋 Muestra los canales NSFW del servidor", c: "nsfw" }
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
            container.innerHTML += `
                <div class="command-card" onclick="copyToClipboard('${cmd.n}')">
                    <div>
                        <div class="cmd-name">${cmd.n}</div>
                        <div class="cmd-desc">${cmd.d}</div>
                    </div>
                    <div>
                        <span class="cmd-tag">${cmd.c}</span>
                        <div class="copy-hint" style="font-size:0.6rem; color:var(--accent); opacity:0.6;">Click para copiar</div>
                    </div>
                </div>`;
        });
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
        // Opcional: alert('Copiado: ' + text);
    }

    function filter(cat, el) {
        document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
        render(cat, document.getElementById('search').value);
    }

    document.getElementById('search').addEventListener('input', (e) => {
        const activeEl = document.querySelector('.category.active');
        const cat = activeEl.getAttribute('data-cat') || 'all';
        render(cat, e.target.value);
    });

    render();
</script>
