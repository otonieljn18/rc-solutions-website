/* RC Solutions — language toggle, live clocks, nav, scroll reveals, contact form. */
(function () {
  "use strict";

  const PWR = '<span class="o"><svg><use href="#pwr"/></svg></span>';

  /* Spanish copy. English lives in the HTML. */
  const ES = {
    skip: "Ir al contenido",
    "nav.services": "Servicios",
    "nav.power": "Power Platform",
    "nav.why": "¿Por qué RD?",
    "nav.models": "Cómo trabajamos",
    "nav.team": "Equipo",
    "nav.careers": "Empleos",
    "nav.cta": "Agendar",
    "book.k": "La vía más rápida",
    "book.t": "Elija un horario para una llamada de 30 minutos por Google Meet.",
    "book.cta": "Agendar llamada",

    "hero.kicker": "Equipos nearshore · Santo Domingo <b>→</b> Estados Unidos",
    "hero.title": "Su equipo,<br /><span class=\"nw\">encendid" + PWR + ".</span>",
    "hero.lead": "Formamos y dirigimos equipos de automatización, finanzas y software en República Dominicana para empresas de EE. UU. — bilingües, en su horario y liderados por profesionales con experiencia a escala empresarial.",
    "hero.cta1": "Agendar llamada",
    "hero.cta2": "Cómo trabajamos",
    "fact.1": "años liderando automatización empresarial",
    "fact.2": "de diferencia con la hora del Este, todo el año",
    "fact.3": "talento bilingüe inglés–español",
    "clock.ny": "Nueva York",
    "clock.sd": "Santo Domingo",

    "svc.label": "Servicios",
    "svc.title": "Empezamos en RPA.<br />La automatización sigue siendo nuestra forma de pensar.",
    "svc.1t": "Automatización Inteligente y RPA",
    "svc.1d": "Descubrimiento de procesos, prueba de concepto, robots en producción, orquestación y soporte. Analistas, desarrolladores y arquitectos de soluciones bajo un mismo techo — ahora también con agentes de IA.",
    "svc.2t": "Operaciones de Finanzas y Contabilidad",
    "svc.2d": "Analistas bilingües que trabajan con estándares de EE. UU. — conciliaciones, cuentas por pagar y cobrar, cierre mensual y reportes — con automatización desde el primer día.",
    "svc.2g": "CxP / CxC · Conciliaciones · Cierre mensual · Reportes",
    "svc.3t": "Software a la Medida y UX",
    "svc.3d": "Aplicaciones web, APIs e integraciones de ingenieros senior y especialistas UX que se integran a sus ceremonias, herramientas y estándares.",
    "svc.4t": "Analítica de Datos y Procesos",
    "svc.4d": "Análisis estadístico, minería de procesos y tableros que muestran dónde se pierde tiempo y dinero — para automatizar donde más rápido se recupera la inversión.",
    "svc.4g": "Estadística · Minería de procesos · Tableros",
    "svc.5t": "Power Platform y Low-Code",
    "svc.new": "Nuevo",
    "svc.5d": "Aplicaciones de negocio, automatizaciones, tableros y agentes de IA sobre Microsoft Power Platform — entregados en semanas y gobernados para crecer. <a href=\"#power\" class=\"inline-link\">Ver la práctica →</a>",

    "pp.label": "Práctica Power Platform",
    "pp.title": "Low-code, alto impacto.<br />Entregamos en semanas. Gobernamos por años.",
    "pp.lead": "Diseñamos, construimos y gobernamos soluciones en Microsoft Power Platform — apps, automatizaciones, tableros y agentes de IA — para que sus equipos dejen de pelear con sus herramientas. Con especialistas bilingües en su horario.",
    "pp.1t": "Construir",
    "pp.1s": "Soluciones Power a la medida",
    "pp.1d": "Power Apps canvas y model-driven sobre Dataverse o SharePoint, conectadas a los sistemas que ya usa. Entregadas con documentación y una transferencia ordenada.",
    "pp.2t": "Automatizar",
    "pp.2s": "Flujos y agentes de IA",
    "pp.2d": "Flujos de Power Automate en la nube y de escritorio, y agentes en Copilot Studio — incluyendo flujos multiagente que pasan el trabajo entre sistemas y personas.",
    "pp.3t": "Gobernar",
    "pp.3s": "Centro de Excelencia",
    "pp.3d": "Estrategia de entornos, políticas de prevención de pérdida de datos, el CoE Starter Kit y pipelines de ALM — para que el low-code crezca con orden.",
    "pp.4t": "Habilitar",
    "pp.4s": "Desarrolladores ciudadanos",
    "pp.4d": "Talleres prácticos para \"construirlo en un día\" y formación de desarrolladores ciudadanos en español o inglés, con soporte continuo para lo que su gente construye.",
    "pp.pilot": "<b>Empiece con un piloto.</b> Un proceso, una solución funcionando, usuarios reales — y luego una hoja de ruta para escalar.",
    "pp.cta": "Definir un piloto de Power Platform",

    "why.label": "¿Por qué República Dominicana?",
    "why.cap": "La diferencia entre su oficina y la nuestra. Todos los días del año.",
    "why.title": "La capacidad del offshore, sin el desfase del offshore.",
    "why.lead": "Los centros offshore tradicionales tienen mucho talento, pero traen traspasos nocturnos y carga de gestión. Nuestra célula en Santo Domingo elimina ambos.",
    "why.colA": "Offshore típico",
    "why.colB": "RC Solutions",
    "why.r1": "Horas compartidas",
    "why.r1a": "Pocas o ninguna",
    "why.r1b": "Toda su jornada",
    "why.r2": "Comunicación",
    "why.r2a": "Tickets asíncronos",
    "why.r2b": "Reuniones en vivo, cambios el mismo día",
    "why.r3": "Idioma",
    "why.r3a": "Variable",
    "why.r3b": "Inglés C1/C2, español nativo",
    "why.r4": "Viajar",
    "why.r4a": "Vuelos largos",
    "why.r4b": "Vuelos directos y cortos desde EE. UU.",
    "why.r5": "Liderazgo",
    "why.r5a": "Proveedor remoto",
    "why.r5b": "Directores en el terreno",

    "mod.label": "Cómo trabajamos",
    "mod.title": "Tres formas de empezar. Usted decide cuánto delega.",
    "mod.3k": "Modalidad 03 — Usted contrata",
    "mod.3t": "Colocación Directa",
    "mod.3d": "Reclutamos en RD y usted contrata al candidato directamente en su nómina — o la de su cliente. Un solo pago por éxito, sin márgenes recurrentes.",
    "mod.3b1": "Evaluación de arquitectura por nuestro arquitecto principal",
    "mod.3b2": "Entrevista de liderazgo con nuestro director en el país",
    "mod.3b3": "Sin intermediación de nómina ni cuotas mensuales",
    "mod.1k": "Modalidad 01 — Usted dirige",
    "mod.1t": "Aumento de Personal",
    "mod.1d": "Buscamos, evaluamos y colocamos especialistas bilingües que se integran a su equipo. Usted mantiene la dirección del día a día.",
    "mod.1b1": "Evaluación técnica y de inglés",
    "mod.1b2": "Integrados a sus herramientas y rutinas",
    "mod.1b3": "Escale según cambie la demanda",
    "mod.2k": "Modalidad 02 — Nosotros dirigimos",
    "mod.2t": "Célula Totalmente Gestionada",
    "mod.2d": "Un equipo llave en mano con gestión de programas local en Santo Domingo y gobierno de arquitectura de nuestro arquitecto principal. Nosotros asumimos el riesgo de entrega.",
    "mod.2b1": "Gestión de programas y ritmo operativo",
    "mod.2b2": "Gobierno de arquitectura y calidad",
    "mod.2b3": "Un solo punto de responsabilidad",
    "mod.cta": "Solicitar cotización",
    "step.1t": "Descubrir",
    "step.1d": "Mapeamos procesos, roles y cómo se ve el éxito.",
    "step.2t": "Probar",
    "step.2d": "Una prueba de concepto o una terna — evidencia antes de comprometerse.",
    "step.3t": "Construir",
    "step.3d": "Los equipos se integran, los robots salen y el software se despliega.",
    "step.4t": "Operar",
    "step.4d": "Servicios gestionados, soporte y mejora continua.",

    "team.label": "Liderazgo",
    "team.title": "Más que un equipo. Una familia.",
    "team.lead": "RC Solutions fue fundada por los hermanos Rincon Castillo. Cada proyecto tiene un fundador responsable.",
    "team.1l": "Chicago · Operaciones EE. UU. y Arquitectura",
    "team.1r": "Cofundador, Director General y Arquitecto Principal de Soluciones",
    "team.1d": "20 años liderando automatización inteligente (RPA e IA) en logística, tecnología médica y finanzas. Define la arquitectura y el gobierno técnico de cada célula gestionada.",
    "team.2l": "Santo Domingo · Célula República Dominicana",
    "team.2r": "Cofundador, Director en el País y Gestión de Programas",
    "team.2d": "Estratega de transformación digital y coach Agile. Lidera la célula de Santo Domingo — talento, ritmo operativo y gestión de programas — con disciplina de entrega de nivel bancario.",

    "car.label": "Empleos",
    "car.title": "Construye una carrera en EE. UU. sin salir de RD.",
    "car.lead": "Estamos ampliando nuestro equipo de profesionales bilingües en Santo Domingo y Santiago. Si trabajas en inglés a nivel C1/C2 y te gustan los retos difíciles, queremos conocerte.",
    "car.cta": "Envía tu CV",
    "car.r1": "Desarrolladores RPA y Automatización",
    "car.r2": "Ingenieros de Software y Especialistas UX",
    "car.r3": "Analistas de Finanzas y Contabilidad",
    "car.r4": "Arquitectos de Soluciones y Líderes de Programa",

    "con.label": "Contacto",
    "con.title": "<span class=\"nw\">Encendámosl" + PWR + ".</span>",
    "con.lead": "Un especialista o una célula completa — cuéntenos qué necesita y le respondemos en un día hábil con los próximos pasos.",
    "con.us": "Estados Unidos",
    "con.dr": "República Dominicana",
    "f.name": "Nombre",
    "f.company": "Empresa",
    "f.email": "Correo corporativo",
    "f.interest": "Me interesa",
    "f.o1": "Automatización y RPA",
    "f.o2": "Finanzas y Contabilidad",
    "f.o3": "Software y UX",
    "f.o4": "Datos y Analítica",
    "f.o5": "Aumento de personal",
    "f.o6": "Célula gestionada",
    "f.o7": "Power Platform",
    "f.o8": "Colocación directa",
    "f.msg": "¿Cómo podemos ayudarle?",
    "f.send": "Enviar mensaje",

    "foot.tag": "Equipos nearshore de automatización e ingeniería.<br />Santo Domingo, República Dominicana — al servicio de Estados Unidos.",
    "foot.rights": "Todos los derechos reservados."
  };

  const MSG = {
    en: { required: "Please add your name, a valid email and a short message.", opening: "Opening your email app… If nothing happens, write to arincon@rcsolucionesrpa.com." },
    es: { required: "Por favor agregue su nombre, un correo válido y un mensaje.", opening: "Abriendo su aplicación de correo… Si no ocurre nada, escriba a arincon@rcsolucionesrpa.com." }
  };

  document.documentElement.classList.remove("no-js");

  /* ---------- Language ---------- */
  const nodes = document.querySelectorAll("[data-i18n]");
  const EN = {};
  nodes.forEach((el) => { EN[el.dataset.i18n] = el.innerHTML; });
  let lang = "en";

  function setLang(next) {
    lang = next === "es" ? "es" : "en";
    const dict = lang === "es" ? ES : EN;
    nodes.forEach((el) => { const v = dict[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("rc-lang", lang); } catch (e) {}
    tick();
  }

  /* ---------- Live clocks ---------- */
  const clocks = document.querySelectorAll("[data-tz]");
  function tick() {
    clocks.forEach((el) => {
      el.textContent = new Intl.DateTimeFormat(lang === "es" ? "es-DO" : "en-US", { hour: "numeric", minute: "2-digit", timeZone: el.dataset.tz }).format(new Date());
    });
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  let saved = null;
  try { saved = localStorage.getItem("rc-lang"); } catch (e) {}
  setLang(new URLSearchParams(location.search).get("lang") || saved || "en");
  setInterval(tick, 15000);

  /* ---------- Header + mobile nav ---------- */
  const header = document.querySelector(".header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = document.querySelector(".burger");
  const nav = document.getElementById("nav");
  const close = () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => burger.setAttribute("aria-expanded", String(nav.classList.toggle("open"))));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  /* ---------- Scroll reveals ---------- */
  const items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => {
      const sibs = [...el.parentElement.children].filter((c) => c.classList.contains("rv"));
      el.style.transitionDelay = Math.min(sibs.indexOf(el), 4) * 90 + "ms";
      io.observe(el);
    });
  } else {
    items.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Contact form (opens the visitor's email app) ---------- */
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = form.elements;
    let ok = true;
    ["name", "email", "message"].forEach((n) => {
      const valid = f[n].value.trim() !== "" && f[n].checkValidity();
      f[n].setAttribute("aria-invalid", String(!valid));
      if (!valid) ok = false;
    });
    if (!ok) { note.textContent = MSG[lang].required; return; }
    const interest = form.querySelector('input[name="interest"]:checked').value;
    const subject = `[RC Solutions] ${interest} — ${f.company.value || f.name.value}`;
    const body = `Name: ${f.name.value}\nCompany: ${f.company.value}\nEmail: ${f.email.value}\nInterest: ${interest}\n\n${f.message.value}`;
    note.textContent = MSG[lang].opening;
    window.location.href = "mailto:arincon@rcsolucionesrpa.com,orincon@rcsolucionesrpa.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  /* "Scope a Power Platform pilot" pre-selects Power Platform in the form */
  document.querySelectorAll("[data-pp-cta]").forEach((a) => a.addEventListener("click", () => {
    const r = form.querySelector('input[name="interest"][value="Power Platform & Low-Code"]');
    if (r) r.checked = true;
  }));

  document.getElementById("year").textContent = new Date().getFullYear();
})();
