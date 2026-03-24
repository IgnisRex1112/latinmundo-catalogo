/**
 * LATINMUNDO — Catálogo
 *
 * CÓMO FUNCIONA LA PERSISTENCIA:
 * Los productos viven aquí, en DEFAULT_PRODUCTS.
 * Para añadir/editar productos permanentemente:
 *   1. Entra al admin (5 clics en el logo)
 *   2. Añade o edita los productos
 *   3. Pulsa "Exportar" → te descarga un JSON
 *   4. Manda el JSON por WhatsApp/email al desarrollador
 *   5. El desarrollador actualiza este archivo y lo publica
 *   → Todos los usuarios del mundo ven los cambios
 *
 * NOTA: Los cambios del admin duran mientras no recargues la página.
 * Para que sean permanentes, usa el flujo de arriba.
 */

// ─────────────────────────────────────────────────────────────
// PRODUCTOS — editar solo desde el admin, luego exportar
// ─────────────────────────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "CBSé Yerba Mate Frutos del Bosque",
    tags: ["yerba mate", "bebida", "argentina", "infusión"],
    description: "Yerba mate argentina con aroma natural a frutos del bosque. Bolsa de 500g. Perfecta para compartir entre amigos.",
    price: "",
    badge: "popular",
    emoji: "🧉",
    image: ""
  },
  {
    id: 2,
    name: "CBSé Yerba Mate Naranja",
    tags: ["yerba mate", "bebida", "argentina", "infusión", "cítrico"],
    description: "Blend de yerba mate con notas cítricas de naranja. Refrescante y natural. 500g.",
    price: "",
    badge: "",
    emoji: "🧉",
    image: ""
  },
  {
    id: 3,
    name: "Canarias Yerba Mate",
    tags: ["yerba mate", "bebida", "uruguaya", "infusión"],
    description: "Yerba mate uruguaya de hoja fina, clásica y reconocida en todo el mundo. Ideal para el mate tradicional.",
    price: "",
    badge: "",
    emoji: "🧉",
    image: ""
  },
  {
    id: 4,
    name: "Kurupí Menta y Boldo",
    tags: ["yerba mate", "bebida", "hierbas", "infusión", "digestivo"],
    description: "Yerba mate compuesta con hierbas de menta y boldo. Sabor suave y digestivo. 500g.",
    price: "",
    badge: "nuevo",
    emoji: "🧉",
    image: ""
  },
  {
    id: 5,
    name: "Buchanan's DeLuxe 12 Años",
    tags: ["whisky", "bebida espirituosa", "escocés", "alcohol", "premium"],
    description: "Whisky escocés blended envejecido 12 años. Notas de vainilla, miel y especias. 700ml.",
    price: "",
    badge: "premium",
    emoji: "🥃",
    image: ""
  },
  {
    id: 6,
    name: "Old Parr Tropical",
    tags: ["whisky", "bebida espirituosa", "escocés", "alcohol"],
    description: "Whisky escocés con vibra caribeña. Notas frescas y tropicales, perfecto para combinados. 700ml.",
    price: "",
    badge: "",
    emoji: "🥃",
    image: ""
  },
  {
    id: 7,
    name: "Cristal Sin Azúcar",
    tags: ["bebida espirituosa", "caña", "ecuador", "alcohol", "sin azúcar"],
    description: "Bebida espirituosa de caña del Valle de Yanguilla, Ecuador. 700ml — 34% ABV. Ligera y sin azúcar añadida.",
    price: "",
    badge: "",
    emoji: "🍶",
    image: ""
  },
  {
    id: 8,
    name: "Trópico Liqueur",
    tags: ["licor", "bebida espirituosa", "tropical", "alcohol", "frutas"],
    description: "Licor tropical con sabores a frutas exóticas. Disponible en Tropicola, Tropiale y Sin Azúcar.",
    price: "",
    badge: "",
    emoji: "🍹",
    image: ""
  },
  {
    id: 9,
    name: "Tilapia Fresca",
    tags: ["pescado", "fresco", "proteína", "mar"],
    description: "Tilapia entera fresca. Ideal para freír, al horno o a la plancha. Consulta disponibilidad diaria.",
    price: "",
    badge: "fresco",
    emoji: "🐟",
    image: ""
  },
  {
    id: 10,
    name: "Maizena",
    tags: ["despensa", "harina", "maíz", "espesante", "colombiana"],
    description: "Fécula de maíz Maizena. Imprescindible en la cocina latinoamericana para espesar salsas, cremas y postres.",
    price: "",
    badge: "",
    emoji: "🌽",
    image: ""
  },
  {
    id: 11,
    name: "Arroz Blanco Largo",
    tags: ["despensa", "arroz", "cereal", "básico"],
    description: "Arroz de grano largo, base de la cocina latinoamericana. Disponible en bolsas de 1kg y 5kg.",
    price: "",
    badge: "",
    emoji: "🍚",
    image: ""
  },
  {
    id: 12,
    name: "Frijoles Negros",
    tags: ["despensa", "legumbre", "conserva", "proteína", "colombiana"],
    description: "Frijoles negros secos. Esenciales para platos como gallo pinto, moros y cristianos, o feijoada.",
    price: "",
    badge: "",
    emoji: "🫘",
    image: ""
  },
  {
    id: 13,
    name: "Plátano Macho",
    tags: ["fruta", "fresco", "tropical", "verdura", "plátano"],
    description: "Plátano macho importado, perfecto para tostones, patacones y otros platos latinoamericanos tradicionales.",
    price: "",
    badge: "fresco",
    emoji: "🍌",
    image: ""
  },
  {
    id: 14,
    name: "Yuca Fresca",
    tags: ["verdura", "fresco", "tropical", "raíz", "mandioca"],
    description: "Yuca fresca (mandioca). Ideal para hervir, freír o hacer purés. Muy versátil en la cocina caribeña.",
    price: "",
    badge: "fresco",
    emoji: "🌿",
    image: ""
  },
  {
    id: 15,
    name: "Ají Amarillo",
    tags: ["especias", "condimento", "picante", "peruano", "fresco"],
    description: "Ají amarillo peruano, el ingrediente estrella de la cocina peruana. Sabor único, afrutado y picante moderado.",
    price: "",
    badge: "",
    emoji: "🌶️",
    image: ""
  },
  {
    id: 16,
    name: "Tinto de Verano Tropical",
    tags: ["refresco", "bebida", "lata", "verano"],
    description: "Refresco de tinto de verano con toque tropical. Ligero y refrescante. Pack de 6 latas.",
    price: "",
    badge: "",
    emoji: "🥤",
    image: ""
  },
  {
    id: 17,
    name: "Pony Malta 330ml lata",
    tags: ["bebida", "malta", "lata"],
    description: "Bebida malteada",
    price: "1.29€",
    badge: "oferta",
    emoji: "🛒",
    image: "https://americanmarket.es/wp-content/uploads/2023/07/BE026_l-500x500-1.jpg"
  },
  {
    id: 18,
    name: "Flor de Jamaica 100g",
    tags: ["flor","infusión"],
    description: "Flor para infusiones",
    price: "1.99€",
    badge: "",
    emoji: "🛒",
    image: "https://static8.depositphotos.com/1526816/999/v/450/depositphotos_9994393-stock-illustration-flower.jpg"
  },
  {
    id: 19,
    name: "ChocoRamo",
    tags: ["chocolate", "bizcocho",],
    description: "ChocoRamo, esponjoso bizcoho recubierto de chocolate",
    price: "1.49€",
    badge: "Agotado",
    emoji: "🛒",
    image: "https://lacasadejack.com/cdn/shop/files/chocoramo-20x65gsweets-5983325_1200x.jpg?v=1773702613"
  },
  {
    id: 20,
    name: "Pony Malta 330ml Cristal",
    tags: ["bebida", "malta", "cristal"],
    description: "Bebida malteada",
    price: "1.49€",
    badge: "",
    emoji: "🛒",
    image: "https://tiendaonlineintertropico.com/img/p/1/3/6/6/1366-large_default.jpg"
  }
  
];

// ── Estado (en memoria — permanente en código, temporal en sesión) ──
let _products = DEFAULT_PRODUCTS.map(p => ({...p}));
let _activeTag = null;
let _searchQuery = '';
let _sortBy = 'default';
let _themeDark = matchMedia('(prefers-color-scheme: dark)').matches;

function loadProducts() { return _products; }
function saveProducts(p) { _products = p; }
function getNextId(arr) { return arr.length > 0 ? Math.max(...arr.map(p => p.id)) + 1 : 1; }

// ── DOM helpers ────────────────────────────────────────────
function el(id) { return document.getElementById(id); }
function qs(sel, ctx = document) { return ctx.querySelector(sel); }

// ── Tags ───────────────────────────────────────────────────
function getAllTags() {
  const set = new Set();
  _products.forEach(p => (p.tags || []).forEach(t => set.add(t)));
  return [...set].sort();
}

function renderTagCloud() {
  const wrap = el('tag-cloud');
  if (!wrap) return;
  wrap.innerHTML = getAllTags().map(tag =>
    `<button class="tag-chip${_activeTag === tag ? ' active' : ''}" onclick="setActiveTag('${tag.replace(/'/g,"\\'")}')">
      ${tag}
    </button>`
  ).join('');
}

function setActiveTag(tag) {
  _activeTag = (_activeTag === tag) ? null : tag;
  const input = el('search-input');
  if (input) { input.value = _activeTag || ''; _searchQuery = _activeTag || ''; }
  renderTagCloud();
  renderProducts();
}

function clearSearch() {
  _activeTag = null; _searchQuery = '';
  const input = el('search-input');
  if (input) input.value = '';
  renderTagCloud();
  renderProducts();
}

// ── Renderizar catálogo ────────────────────────────────────
function renderProducts() {
  const grid = el('products-grid');
  const countEl = el('products-count');
  if (!grid) return;

  const q = _searchQuery.toLowerCase().trim();
  let filtered = _products.filter(p => {
    if (!q) return true;
    return p.name.toLowerCase().includes(q)
      || (p.description || '').toLowerCase().includes(q)
      || (p.tags || []).some(t => t.toLowerCase().includes(q));
  });

  if (_sortBy === 'az') filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (_sortBy === 'za') filtered.sort((a, b) => b.name.localeCompare(a.name));

  if (countEl) countEl.textContent = `${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="products-empty">
      <div class="empty-icon">🔍</div>
      <h3>Sin resultados para "${q}"</h3>
      <p>Prueba con otro término o <button onclick="clearSearch()" class="link-btn">borra el filtro</button>.</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(productCardHTML).join('');
  animateCards();
}

// ── Card HTML ──────────────────────────────────────────────
function productCardHTML(p) {
  const priceHTML = p.price
    ? `<span class="product-price">${p.price}</span>`
    : `<span class="product-price no-price">Consultar precio</span>`;

  const imgHTML = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="product-img-placeholder"><span class="card-emoji">${p.emoji || '🛒'}</span></div>`;

  const tagsHTML = (p.tags || []).slice(0, 3).map(t =>
    `<button class="tag-chip tag-chip-sm${_activeTag === t ? ' active' : ''}" onclick="setActiveTag('${t.replace(/'/g,"\\'")}')">
      ${t}
    </button>`
  ).join('');

  const badgeMap = {popular:'Popular',nuevo:'Nuevo',premium:'Premium',fresco:'Fresco',oferta:'Oferta'};
  const badgeHTML = p.badge
    ? `<span class="product-badge badge-${p.badge}">${badgeMap[p.badge] || p.badge}</span>`
    : '';

  const igDM = 'https://www.instagram.com/latinmundo_oficial/';

  return `<article class="product-card" data-id="${p.id}">
    <div class="product-img-wrap">
      ${imgHTML}
      ${badgeHTML}
      <div class="card-overlay">
        <a href="${igDM}" target="_blank" rel="noopener" class="overlay-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          +Info
        </a>
      </div>
    </div>
    <div class="product-body">
      <div class="product-tags">${tagsHTML}</div>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.description || 'Producto disponible en tienda.'}</p>
      <div class="product-footer">
        ${priceHTML}
        <a href="${igDM}" target="_blank" rel="noopener" class="btn-ask">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          +Info
        </a>
      </div>
    </div>
  </article>`;
}

// ── Animación de entrada ───────────────────────────────────
let _obs = null;
function animateCards() {
  if (_obs) _obs.disconnect();
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(c => { c.style.opacity='0'; c.style.transform='translateY(24px)'; c.style.transition='none'; });
  _obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const c = entry.target;
      const d = parseInt(c.dataset.animDelay || 0);
      setTimeout(() => {
        c.style.transition = 'opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)';
        c.style.opacity = '1'; c.style.transform = 'translateY(0)';
      }, d);
      _obs.unobserve(c);
    });
  }, { threshold: 0.08 });
  cards.forEach((c, i) => { c.dataset.animDelay = Math.min(i % 4, 3) * 60; _obs.observe(c); });
}

// ── Búsqueda ───────────────────────────────────────────────
function initSearch() {
  const input = el('search-input');
  if (!input) return;
  input.addEventListener('input', e => {
    _searchQuery = e.target.value.trim(); _activeTag = null;
    renderTagCloud(); renderProducts();
  });
  input.addEventListener('keydown', e => { if (e.key === 'Escape') { clearSearch(); input.blur(); } });
}

// ── Ordenar ────────────────────────────────────────────────
function initSort() {
  const select = el('sort-select');
  if (!select) return;
  select.addEventListener('change', e => { _sortBy = e.target.value; renderProducts(); });
}

// ── Tema oscuro ────────────────────────────────────────────
function initTheme() {
  const root = document.documentElement;
  root.setAttribute('data-theme', _themeDark ? 'dark' : 'light');
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    updateToggleIcon(btn, _themeDark);
    btn.addEventListener('click', () => {
      _themeDark = !_themeDark;
      root.setAttribute('data-theme', _themeDark ? 'dark' : 'light');
      document.querySelectorAll('[data-theme-toggle]').forEach(b => updateToggleIcon(b, _themeDark));
    });
  });
}
function updateToggleIcon(btn, dark) {
  if (!btn) return;
  btn.innerHTML = dark
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

// ── Menú móvil ─────────────────────────────────────────────
function initMobileMenu() {
  const btn = el('mobile-menu-btn');
  const nav = el('main-nav');
  if (!btn || !nav) return;
  const iconBurger = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  const iconClose  = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = nav.classList.toggle('open');
    btn.innerHTML = open ? iconClose : iconBurger;
    btn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.innerHTML = iconBurger;
      btn.setAttribute('aria-expanded', false);
    }
  });
}

// ── Toast ──────────────────────────────────────────────────
function showToast(msg) {
  const t = el('toast');
  if (!t) return;
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Routing ────────────────────────────────────────────────
function showView(view) {
  const catalog = el('view-catalog');
  const admin   = el('view-admin');
  if (!catalog || !admin) return;
  if (view === 'admin') {
    catalog.style.display = 'none';
    admin.style.display = 'block';
    if (typeof initAdminView === 'function') initAdminView();
  } else {
    admin.style.display = 'none';
    catalog.style.display = 'block';
    renderTagCloud(); renderProducts();
  }
}

// ── Acceso secreto admin (5 clics en el logo) ─────────────
function initSecretAdminAccess() {
  let n = 0, t = null;
  document.querySelectorAll('#view-catalog .logo').forEach(logo => {
    logo.addEventListener('click', () => {
      n++; clearTimeout(t);
      if (n >= 5) { n = 0; showView('admin'); return; }
      t = setTimeout(() => { n = 0; }, 1500);
    });
  });
}

// ── Hero parallax ──────────────────────────────────────────
function initHeroParallax() {
  const pattern = document.querySelector('.hero-pattern');
  if (!pattern) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { pattern.style.transform = `translateY(${window.scrollY * 0.3}px)`; ticking = false; });
      ticking = true;
    }
  }, { passive: true });
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSearch();
  initSort();
  initMobileMenu();
  initHeroParallax();
  initSecretAdminAccess();
  renderTagCloud();
  renderProducts();
});
