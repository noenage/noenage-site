/* =========================================================
   NOENAGE — interactions
   ========================================================= */

// ---- Configuration : à personnaliser ----
const CONFIG = {
  email: "dubreuilnoe@gmail.com",
  instagram: "noe_dbr_",
};

// ---- Ebook ----
// buyUrl : colle ici ton lien de paiement (Gumroad, Lemon Squeezy, Stripe Payment Link…).
// Tant qu'il est vide, le bouton renvoie vers le formulaire de contact.
const EBOOK = {
  id: "ebook",
  title: "La Méthode Noenage",
  price: 29,
  buyUrl: "",
  chapters: [
    ["Les bases", "Flottaison, gainage et respiration : la fondation de toutes les nages."],
    ["Le crawl décortiqué", "Rotation, prise d'appui, battements et respiration bilatérale."],
    ["Les 4 nages", "Dos, brasse, papillon : les erreurs fréquentes et comment les corriger."],
    ["Départs, coulées & virages", "Plonger, glisser, faire une culbute propre."],
    ["Construire ta séance", "Échauffement, corps de séance, retour au calme : la bonne structure."],
    ["Mental & récupération", "Ma routine avant une course, le sommeil, la récup."],
  ],
};

// ---- Programmes PDF (modifie prix / contenus ici) ----
const OFFERS = [
  {
    id: "debuter",
    cat: "debutant",
    icon: "🌱",
    accent: "#3CC6E6",
    title: "Premiers pas en crawl",
    desc: "Pour passer de « je me débrouille » à un vrai crawl, avec une respiration qui ne t'essouffle plus.",
    duration: "4 semaines",
    rhythm: "2–3 séances / sem.",
    level: "Débutant",
    price: 15,
    buyUrl: "",
    goals: ["Respirer sur le côté sans boire la tasse", "Nager 100 m de crawl sans t'arrêter", "Comprendre les éducatifs de base"],
    includes: ["12 séances détaillées (45 min)", "Fiches éducatifs illustrées", "Tableau de suivi à imprimer"],
  },
  {
    id: "endurance",
    cat: "progresser",
    icon: "🔁",
    accent: "#24418A",
    title: "Endurance : de 1 à 3 km",
    desc: "Augmente progressivement ta distance et nage plus longtemps sans te mettre dans le rouge.",
    duration: "8 semaines",
    rhythm: "3 séances / sem.",
    level: "Intermédiaire",
    price: 19,
    buyUrl: "",
    goals: ["Tenir 3 km en continu", "Trouver ton allure de croisière", "Améliorer ta glisse pour dépenser moins d'énergie"],
    includes: ["24 séances détaillées", "Tests de progression toutes les 2 semaines", "Conseils d'allure et de récupération"],
  },
  {
    id: "sprint",
    cat: "performance",
    icon: "⚡",
    accent: "#E0262E",
    title: "Vitesse & sprint 50/100 m",
    desc: "Le programme pour gratter des secondes : départs, virages, fréquence de bras et explosivité.",
    duration: "6 semaines",
    rhythm: "3–4 séances / sem.",
    level: "Confirmé",
    price: 19,
    buyUrl: "",
    goals: ["Améliorer ton chrono sur 50 et 100 m", "Des départs et virages plus rapides", "Gagner en puissance de bras et de jambes"],
    includes: ["20 séances détaillées", "Séances de renfo hors de l'eau", "Plan d'affûtage avant compétition"],
  },
  {
    id: "triathlon",
    cat: "performance",
    icon: "🌊",
    accent: "#0B1B3A",
    title: "Triathlon & eau libre",
    desc: "Optimise ta partie natation : allure régulière, orientation et nage en groupe.",
    duration: "8 semaines",
    rhythm: "2–3 séances / sem.",
    level: "Intermédiaire +",
    price: 19,
    buyUrl: "",
    goals: ["Tenir une allure régulière sur la distance", "Apprendre à s'orienter (sighting)", "Gérer le départ en groupe"],
    includes: ["20 séances en bassin", "Exercices spécifiques eau libre", "Check-list combinaison & jour de course"],
  },
];

// ---- Pack complet : ebook + tous les programmes ----
const PACK = {
  id: "pack",
  cat: "all",
  icon: "🏆",
  accent: "#D4F23A",
  featured: true,
  badge: "Meilleure offre",
  title: "Pack complet",
  desc: "L'ebook La Méthode Noenage + les 4 programmes PDF. Tout pour progresser, du premier crawl au chrono.",
  price: 50,
  buyUrl: "",
  includes: ["L'ebook La Méthode Noenage", ...OFFERS.map((o) => `Programme « ${o.title} »`), "Toutes les futures mises à jour"],
};
const PACK_VALUE = EBOOK.price + OFFERS.reduce((s, o) => s + o.price, 0);

// ---- Avis clients ----
// Ajoute ici de VRAIS avis d'acheteurs. Tant que la liste est vide, le carrousel est masqué.
// Exemple : { name: "Julien B.", info: "28 ans · Endurance", tag: "Endurance", stars: 5, color: "#24418A",
//             text: "…", from: "1 km avec pauses", to: "3 km en continu" },
const REVIEWS = [];

// ---- FAQ ----
const FAQ = [
  ["Comment je reçois mon PDF ?", "Juste après le paiement, tu reçois un lien de téléchargement par e-mail. Tu peux lire le PDF sur ton téléphone, ta tablette, ton ordinateur ou l'imprimer."],
  ["Je ne sais pas quel programme choisir.", "Fais le quiz « Quel nageur es-tu ? » plus haut : en 30 secondes, il te recommande le programme adapté à ton niveau. Sinon, écris-moi !"],
  ["Faut-il savoir nager pour suivre un programme ?", "Oui : les programmes sont faits pour des personnes qui savent déjà se déplacer dans l'eau. Si l'eau t'angoisse ou si tu n'as jamais nagé, commence par quelques cours avec un maître-nageur."],
  ["De quel matériel ai-je besoin ?", "Un maillot, des lunettes et un bonnet suffisent pour commencer. Certaines séances utilisent une planche, un pull-buoy ou des palmes, souvent disponibles à la piscine."],
  ["Est-ce que je peux être remboursé ?", "Comme il s'agit d'un contenu numérique téléchargé immédiatement, tu renonces à ton droit de rétractation au moment de l'achat. Si tu rencontres un problème, contacte-moi et on trouve une solution."],
  ["Tu es coach diplômé ?", "Non, je suis nageur de compétition. Je partage ce qui m'a fait progresser, sans prétendre remplacer un entraîneur diplômé. Nage toujours dans un lieu surveillé."],
];

// ---- Quiz ----
const QUIZ = [
  {
    q: "Comment te sens-tu dans l'eau ?",
    opts: [
      { ico: "😰", t: "Pas très à l'aise", s: "Surtout quand je n'ai pas pied", v: 0 },
      { ico: "🙂", t: "Ça va", s: "Je me débrouille mais je fatigue vite", v: 1 },
      { ico: "😎", t: "À l'aise", s: "Je nage sans stress", v: 2 },
      { ico: "🐬", t: "Comme un poisson", s: "Je nage régulièrement depuis longtemps", v: 3 },
    ],
  },
  {
    q: "Quelle distance nages-tu en crawl sans t'arrêter ?",
    opts: [
      { ico: "🚫", t: "Je ne sais pas nager le crawl", s: "Je nage surtout la brasse", v: 0 },
      { ico: "📏", t: "Moins de 50 m", s: "Je m'essouffle très vite", v: 1 },
      { ico: "🏊", t: "De 50 à 800 m", s: "J'enchaîne quelques longueurs", v: 2 },
      { ico: "🚀", t: "Plus de 800 m", s: "Je tiens la distance", v: 3 },
    ],
  },
  {
    q: "Quel est ton objectif principal ?",
    opts: [
      { ico: "📚", t: "Apprendre le crawl", s: "Avoir enfin une technique propre", goal: "debuter" },
      { ico: "🔁", t: "Nager plus longtemps", s: "Gagner en endurance", goal: "endurance" },
      { ico: "⏱️", t: "Nager plus vite", s: "Améliorer mes chronos", goal: "sprint" },
      { ico: "🏆", t: "Triathlon / eau libre", s: "Préparer une course", goal: "triathlon" },
    ],
  },
  {
    q: "Qu'est-ce qui te correspond le mieux ?",
    opts: [
      { ico: "📋", t: "Juste un plan à suivre", s: "Dis-moi quoi faire à chaque séance", want: "plan" },
      { ico: "🧠", t: "Comprendre la technique", s: "Savoir pourquoi et comment", want: "ebook" },
      { ico: "💯", t: "Tout avoir", s: "Je veux progresser à fond", want: "pack" },
    ],
  },
];

const LEVELS = [
  { max: 1, name: "Découverte", p: 20, text: "Tu fais tes premiers pas. On construit des bases solides : respiration, glisse et confiance." },
  { max: 3, name: "Débutant", p: 40, text: "Tu as quelques repères, mais il manque les fondamentaux. Avec un plan clair, tu vas progresser très vite." },
  { max: 5, name: "Intermédiaire", p: 70, text: "Tu nages déjà ! Place à la technique et au volume pour nager plus loin, plus facilement." },
  { max: 6, name: "Confirmé", p: 92, text: "Tu as un vrai bagage. On va chercher les détails qui font gagner des secondes." },
];

/* =========================================================
   Helpers
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const chevron = '<svg class="i" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
const arrow = '<svg class="i" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const PRODUCTS = [EBOOK, ...OFFERS, PACK];
const product = (id) => PRODUCTS.find((p) => p.id === id);

/* ---------- Nav ---------- */
const nav = $("#nav");
const burger = $("#burger");
const mobileCta = $("#mobileCta");

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle("is-scrolled", y > 20);
  const contactTop = $("#contact").getBoundingClientRect().top;
  mobileCta.classList.toggle("is-visible", y > window.innerHeight * 0.7 && contactTop > window.innerHeight * 0.6);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  document.body.style.overflow = open ? "hidden" : "";
}
burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
$$("#navLinks a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// Lien actif selon la section visible
const sectionLinks = $$('#navLinks a:not(.btn)');
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) sectionLinks.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
["apropos", "ebook", "programmes", "quiz", "faq"].forEach((id) => spy.observe(document.getElementById(id)));

/* ---------- Reveal + compteurs ---------- */
function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const dec = parseInt(el.dataset.decimals || 0, 10);
  const suffix = el.dataset.suffix || "";
  const fmt = (v) => v.toFixed(dec).replace(".", ",") + suffix;
  if (reduceMotion) { el.textContent = fmt(target); return; }
  const dur = 1600, start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = fmt(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-visible");
    $$("[data-count]", en.target).forEach(animateCount);
    io.unobserve(en.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

function observeReveals(root = document) {
  $$(".reveal:not(.is-visible)", root).forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
    io.observe(el);
  });
}

// Compteurs du hero (visibles d'emblée)
setTimeout(() => $$(".hero [data-count]").forEach(animateCount), 300);

/* ---------- Achat ---------- */
// Lien de paiement s'il existe, sinon formulaire de contact pré-rempli.
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-buy]");
  if (!b) return;
  const p = product(b.dataset.buy);
  if (p && p.buyUrl) { b.href = p.buyUrl; b.target = "_blank"; return; }
  e.preventDefault();
  subjectSelect.value = "achat";
  subjectSelect.classList.add("has-value");
  const msg = $("#fMsg");
  msg.value = `Bonjour Noé, je souhaite acheter « ${p.title} » (${p.price} €).`;
  $("#contact").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
});

/* ---------- Ebook ---------- */
$("#ebookPrice").textContent = `${EBOOK.price} €`;
$("#chapters").innerHTML = EBOOK.chapters.map(([t, d]) => `<li><strong>${t}</strong><span>${d}</span></li>`).join("");

/* ---------- Programmes ---------- */
const grid = $("#offersGrid");
const card = (o) => `
  <article class="offer reveal ${o.featured ? "is-featured" : ""}" data-cat="${o.cat}" id="offre-${o.id}" style="--accent:${o.accent}">
    ${o.badge ? `<span class="offer__badge">${o.badge}</span>` : ""}
    <div class="offer__icon" aria-hidden="true">${o.icon}</div>
    <h3 class="offer__title">${o.title}</h3>
    <p class="offer__desc">${o.desc}</p>
    ${o.duration ? `<div class="offer__meta"><span>📅 ${o.duration}</span><span>🔁 ${o.rhythm}</span><span>📶 ${o.level}</span></div>` : ""}
    <div class="offer__details" id="det-${o.id}">
      <div>
        ${o.goals ? `<h4>Objectifs</h4><ul>${o.goals.map((g) => `<li>${g}</li>`).join("")}</ul>` : ""}
        <h4>Dans le PDF</h4>
        <ul>${o.includes.map((g) => `<li>${g}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="offer__price"><strong>${o.price} €</strong><small>${o.featured ? `au lieu de ${PACK_VALUE} € séparément` : "PDF · paiement unique"}</small></div>
    <a href="#" class="btn ${o.featured ? "btn--lime" : "btn--red"} btn--block offer__buy" data-buy="${o.id}">${o.featured ? "Prendre le pack" : "Télécharger le programme"} ${arrow}</a>
    <button class="offer__toggle" aria-expanded="false" aria-controls="det-${o.id}">Voir le contenu ${chevron}</button>
  </article>`;
grid.innerHTML = OFFERS.map(card).join("") + card(PACK);

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".offer__toggle");
  if (!btn) return;
  const c = btn.closest(".offer");
  const open = !c.classList.contains("is-open");
  c.classList.toggle("is-open", open);
  btn.setAttribute("aria-expanded", open);
  btn.firstChild.textContent = open ? "Masquer le contenu " : "Voir le contenu ";
});

$$(".chip").forEach((chip) => chip.addEventListener("click", () => {
  $$(".chip").forEach((c) => { c.classList.toggle("is-active", c === chip); c.setAttribute("aria-selected", c === chip); });
  const f = chip.dataset.filter;
  $$(".offer").forEach((c) => c.classList.toggle("is-hidden", f !== "all" && c.dataset.cat !== f && c.dataset.cat !== "all"));
}));

/* ---------- Quiz ---------- */
const quizBody = $("#quizBody");
const quizBar = $("#quizBar");
const quizStep = $("#quizStep");
const quizBack = $("#quizBack");
let step = 0;
let answers = [];

function renderQuestion() {
  const q = QUIZ[step];
  quizBar.style.width = `${((step + 1) / (QUIZ.length + 1)) * 100}%`;
  quizStep.textContent = `Question ${step + 1} / ${QUIZ.length}`;
  quizBack.hidden = step === 0;
  quizBody.innerHTML = `
    <div class="quiz__anim">
      <h3 class="quiz__q">${q.q}</h3>
      <div class="quiz__opts">
        ${q.opts.map((o, i) => `
          <button class="quiz__opt ${answers[step] === i ? "is-picked" : ""}" data-i="${i}">
            <span class="quiz__opt-ico" aria-hidden="true">${o.ico}</span>
            <span><strong>${o.t}</strong><small>${o.s}</small></span>
          </button>`).join("")}
      </div>
    </div>`;
}

quizBody.addEventListener("click", (e) => {
  const opt = e.target.closest(".quiz__opt");
  if (opt) {
    answers[step] = +opt.dataset.i;
    opt.classList.add("is-picked");
    setTimeout(() => { step++; step < QUIZ.length ? renderQuestion() : renderResult(); }, reduceMotion ? 0 : 260);
    return;
  }
  if (e.target.closest("[data-restart]")) { step = 0; answers = []; renderQuestion(); }
});
quizBack.addEventListener("click", () => { if (step > 0) { step--; renderQuestion(); } });

function computeResult() {
  const [c, d, g, w] = answers.map((a, i) => QUIZ[i].opts[a]);
  const score = c.v + d.v;
  const level = LEVELS.find((l) => score <= l.max);
  let plan = g.goal;
  if (score <= 2) plan = "debuter";                                    // les bases d'abord
  else if (plan === "debuter" && score >= 5) plan = "endurance";       // déjà à l'aise en crawl
  else if (plan === "sprint" && score <= 3) plan = "endurance";        // la vitesse vient après le volume
  const main = w.want === "pack" ? PACK : product(plan);
  const extra = w.want === "ebook" ? EBOOK : null;
  return { level, main, extra, plan: product(plan), anxious: c.v === 0 };
}

const recoCard = (p, label, note = "") => `
  <div class="reco">
    <div class="reco__ico" aria-hidden="true">${p.icon || "📘"}</div>
    <div><small>${label}</small><strong>${p.title}</strong><span>${p.duration ? `${p.duration} · ` : ""}${p.price} €${note}</span></div>
  </div>`;

function renderResult() {
  const { level, main, extra, plan, anxious } = computeResult();
  quizBar.style.width = "100%";
  quizStep.textContent = "Ton résultat";
  quizBack.hidden = true;
  quizBody.innerHTML = `
    <div class="quiz__anim result-card">
      <div class="level-ring" style="--p:${level.p}"><span><small>Niveau</small>${level.name}</span></div>
      <h3>Tu es niveau « ${level.name} »</h3>
      <p>${level.text}</p>
      ${recoCard(main, "Ma recommandation", main === PACK ? ` · commence par « ${plan.title} »` : "")}
      ${extra ? recoCard(extra, "Pour comprendre la technique") : ""}
      ${anxious ? `<p class="quiz__note">💡 Si l'eau t'angoisse, commence par quelques séances avec un maître-nageur avant de suivre un programme seul.</p>` : ""}
      <div class="result-card__ctas">
        <a href="#" class="btn btn--lime btn--lg" data-buy="${main.id}">${main === PACK ? "Prendre le pack" : "Obtenir ce programme"} ${arrow}</a>
        <button class="btn btn--ghost btn--lg" data-restart>Refaire le test</button>
      </div>
    </div>`;
}
renderQuestion();

/* ---------- Avis ---------- */
const track = $("#reviewsTrack");
if (!REVIEWS.length) {
  $("#carousel").remove();
} else {
  track.innerHTML = REVIEWS.map((r) => `
    <article class="review">
      <div class="review__top"><span class="stars" aria-label="${r.stars} étoiles sur 5">${"★".repeat(r.stars)}</span><span class="review__tag">${r.tag}</span></div>
      <blockquote>« ${r.text} »</blockquote>
      <div class="review__progress"><b>${r.from}</b><span class="arrow">→</span><em>${r.to}</em></div>
      <div class="review__who">
        <span class="avatar" style="background:${r.color}">${r.name[0]}</span>
        <div><strong>${r.name}</strong><small>${r.info}</small></div>
      </div>
    </article>`).join("");

  const cards = $$(".review", track);
  const dotsWrap = $("#reviewDots");
  dotsWrap.innerHTML = cards.map((_, i) => `<button aria-label="Aller à l'avis ${i + 1}"></button>`).join("");
  const dots = $$("button", dotsWrap);
  const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  const goTo = (i) => {
    i = (i + cards.length) % cards.length;
    track.scrollTo({ left: cards[i].offsetLeft - track.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
  };
  const currentIndex = () => {
    const x = track.scrollLeft;
    let best = 0;
    cards.forEach((c, i) => { if (Math.abs(c.offsetLeft - track.offsetLeft - x) < Math.abs(cards[best].offsetLeft - track.offsetLeft - x)) best = i; });
    return best;
  };
  const syncDots = () => {
    const idx = atEnd() ? cards.length - 1 : currentIndex();
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
  };
  track.addEventListener("scroll", () => requestAnimationFrame(syncDots), { passive: true });
  dots.forEach((d, i) => d.addEventListener("click", () => goTo(i)));
  $("#prevReview").addEventListener("click", () => goTo(currentIndex() - 1));
  $("#nextReview").addEventListener("click", () => goTo(atEnd() ? 0 : currentIndex() + 1));
  syncDots();
}

/* ---------- FAQ ---------- */
$("#faqList").innerHTML = FAQ.map(([q, a]) => `
  <details class="faq__item">
    <summary>${q}<span class="faq__plus" aria-hidden="true"></span></summary>
    <p>${a}</p>
  </details>`).join("");

/* ---------- Contact ---------- */
$("#mailLink").href = `mailto:${CONFIG.email}`;
$("#mailLink").textContent = CONFIG.email;
$("#igLink").href = `https://www.instagram.com/${CONFIG.instagram}`;
$("#igHandle").textContent = `@${CONFIG.instagram}`;

const subjectSelect = $("#fSubject");
const SUBJECTS = {
  achat: "Acheter un ebook / programme",
  choix: "Quel programme choisir ?",
  telechargement: "Problème de téléchargement",
  partenariat: "Partenariat / marque",
  autre: "Autre",
};
subjectSelect.insertAdjacentHTML("beforeend", Object.entries(SUBJECTS).map(([v, t]) => `<option value="${v}">${t}</option>`).join(""));
subjectSelect.addEventListener("change", () => subjectSelect.classList.add("has-value"));

const form = $("#contactForm");
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function validate() {
  let ok = true;
  [
    [$("#fName"), (v) => v.trim().length > 1],
    [$("#fEmail"), emailOk],
    [subjectSelect, (v) => !!v],
    [$("#fMsg"), (v) => v.trim().length > 2],
  ].forEach(([el, fn]) => {
    const valid = fn(el.value);
    el.closest(".field").classList.toggle("is-invalid", !valid);
    if (!valid && ok) { el.focus(); ok = false; }
  });
  return ok;
}
$$("input, select, textarea", form).forEach((el) => el.addEventListener("input", () => el.closest(".field")?.classList.remove("is-invalid")));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validate()) return;
  const data = new FormData(form);
  const subject = `[Noenage] ${SUBJECTS[data.get("subject")]}`;
  const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  $("#formSuccess").hidden = false;
});

$("#formReset").addEventListener("click", () => {
  form.reset();
  subjectSelect.classList.remove("has-value");
  $("#formSuccess").hidden = true;
});

/* ---------- Divers ---------- */
$("#year").textContent = new Date().getFullYear();
observeReveals();
