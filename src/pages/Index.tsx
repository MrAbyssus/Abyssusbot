import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Coins,
  Sparkles,
  Zap,
  Users,
  Crown,
  ArrowRight,
  Heart,
  Vote,
  LifeBuoy,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const DISCORD_INVITE =
  "https://discord.com/oauth2/authorize?client_id=680897280433324081&redirect_uri=https://abyssus-auth.onrender.com/callback&response_type=code&scope=identify%20guilds";

const features = [
  {
    icon: Coins,
    title: "Economía completa",
    desc: "Trabajos, tienda, ranking de monedas y recompensas diarias para mantener viva tu comunidad.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Moderación avanzada",
    desc: "Auto-mod, anti-spam, warns, mutes y logs detallados para mantener tu servidor seguro.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Sparkles,
    title: "Niveles & XP",
    desc: "Sistema de niveles personalizable con tarjetas de rango y recompensas por actividad.",
    color: "from-fuchsia-400 to-purple-500",
  },
  {
    icon: Crown,
    title: "Sistema Premium",
    desc: "Funciones exclusivas, comandos avanzados y soporte prioritario para tu servidor.",
    color: "from-yellow-300 to-amber-500",
  },
  {
    icon: Users,
    title: "100% en español",
    desc: "Diseñado desde cero para la comunidad hispana. Comandos, ayuda y soporte en español.",
    color: "from-sky-400 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Auth segura",
    desc: "Autenticación oficial vía Discord OAuth2. Sin contraseñas, sin riesgos.",
    color: "from-rose-400 to-pink-500",
  },
];

const stats = [
  { value: "500+", label: "Servidores" },
  { value: "50K+", label: "Usuarios" },
  { value: "100+", label: "Comandos" },
  { value: "99.9%", label: "Uptime" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary grid place-items-center animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="text-gradient">Abyssus</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Características</a>
            <a href="#commands" className="hover:text-foreground transition">Comandos</a>
            <a href="#changelog" className="hover:text-foreground transition">Changelog</a>
            <a href="#support" className="hover:text-foreground transition">Soporte</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90">
            <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">Invitar bot</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

        <div className="container mx-auto relative pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Nuevo · Sistema Premium disponible
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
            El bot definitivo
            <br />
            para tu <span className="text-gradient">Discord</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            Economía, moderación, niveles y mucho más. <strong className="text-foreground">100% en español</strong>,
            con sistema premium y autenticación segura.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-[var(--shadow-glow)] h-12 px-8 text-base">
              <a href={DISCORD_INVITE} target="_blank" rel="noreferrer">
                Añadir a tu servidor <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base border-border hover:bg-muted">
              <a href="#features">Ver comandos</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="container mx-auto -mt-12 mb-24 relative">
        <Card className="glass border-amber-500/30 p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-500/15 grid place-items-center">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Aviso de servicio</h3>
            <p className="text-sm text-muted-foreground">
              Nuestro proveedor de hosting (OVH) presenta un fallo en el datacenter. Abyssus puede mostrar inestabilidad temporal.
              Reporta cualquier problema en el canal de soporte oficial — no damos soporte por mensajes privados.
            </p>
          </div>
        </Card>
      </section>

      {/* FEATURES */}
      <section id="features" className="container mx-auto py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Características</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Todo lo que tu servidor necesita</h2>
          <p className="text-muted-foreground text-lg">
            Una suite completa de herramientas para hacer crecer y proteger tu comunidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="glass p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} grid place-items-center mb-5 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* PREMIUM */}
      <section className="container mx-auto py-24">
        <Card className="relative overflow-hidden glass p-10 md:p-16 border-primary/30">
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <Crown className="w-3.5 h-3.5" /> PREMIUM
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Lleva tu servidor al siguiente nivel</h2>
              <p className="text-muted-foreground mb-6">
                Desbloquea funciones exclusivas, comandos avanzados, soporte prioritario y mucho más.
              </p>
              <ul className="space-y-3 mb-8">
                {["Comandos premium ilimitados", "Soporte prioritario 24/7", "Personalización avanzada", "Sin límites de uso"].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-glow)]">
                Obtener Premium
              </Button>
            </div>
            <div className="relative h-72 md:h-96">
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent animate-float opacity-90 blur-2xl" />
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <Crown className="w-32 h-32 text-primary-glow animate-float" />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* SUPPORT CTAs */}
      <section id="support" className="container mx-auto py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: LifeBuoy, title: "Servidor de soporte", desc: "Únete a nuestra comunidad oficial.", cta: "Unirse", color: "from-indigo-500 to-blue-600" },
            { icon: Vote, title: "Vota por Abyssus", desc: "Apóyanos y recibe recompensas.", cta: "Votar", color: "from-amber-400 to-orange-500" },
            { icon: Heart, title: "Apoya el proyecto", desc: "Contribuye al desarrollo continuo.", cta: "Donar", color: "from-pink-500 to-rose-600" },
          ].map((b) => (
            <Card key={b.title} className="glass p-8 text-center group hover:-translate-y-1 transition">
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${b.color} grid place-items-center mb-4 group-hover:scale-110 transition-transform`}>
                <b.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{b.desc}</p>
              <Button variant="outline" size="sm" className="border-border">{b.cta}</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-12">
        <div className="container mx-auto py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary grid place-items-center">
              <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
            </span>
            <span className="text-gradient">Abyssus Bot</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2021–2026 Abyssus — Diseñado por Mr.Abyssus. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Estado</a>
            <a href="#" className="hover:text-foreground">Privacidad</a>
            <a href="#" className="hover:text-foreground">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
