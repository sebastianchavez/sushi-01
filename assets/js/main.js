function initHeader() {
  const header = document.getElementById("main-header");
  if (!header) return;
  header.innerHTML = `
    <nav class="bg-black/90 backdrop-blur-sm border-b border-red-900/30 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a href="index.html" class="flex items-center gap-2">
            <span class="text-3xl">🍣</span>
            <span class="text-2xl font-bold text-white">Sushi<span class="text-red-500">House</span></span>
          </a>
          <div class="hidden md:flex items-center gap-8">
            <a href="index.html" class="text-gray-300 hover:text-red-400 transition font-medium">Inicio</a>
            <a href="products.html" class="text-gray-300 hover:text-red-400 transition font-medium">Productos</a>
            <a href="about.html" class="text-gray-300 hover:text-red-400 transition font-medium">Nosotros</a>
            <a href="contact.html" class="text-gray-300 hover:text-red-400 transition font-medium">Contacto</a>
          </div>
          <div class="flex items-center gap-4">
            <a href="cart.html" class="relative text-gray-300 hover:text-red-400 transition">
              <i class="fas fa-shopping-cart text-xl"></i>
              <span id="cart-count" class="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold" style="display:none">0</span>
            </a>
            <a href="profile.html" class="text-gray-300 hover:text-red-400 transition">
              <i class="fas fa-user text-xl"></i>
            </a>
            <a href="login.html" class="hidden md:inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition font-medium">
              Iniciar Sesión
            </a>
            <button id="mobile-menu-btn" class="md:hidden text-gray-300 hover:text-white">
              <i class="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden bg-gray-900 border-t border-gray-800">
        <div class="px-4 py-3 space-y-2">
          <a href="index.html" class="block text-gray-300 hover:text-red-400 py-2 transition">Inicio</a>
          <a href="products.html" class="block text-gray-300 hover:text-red-400 py-2 transition">Productos</a>
          <a href="about.html" class="block text-gray-300 hover:text-red-400 py-2 transition">Nosotros</a>
          <a href="contact.html" class="block text-gray-300 hover:text-red-400 py-2 transition">Contacto</a>
          <a href="login.html" class="block bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded-lg transition">Iniciar Sesión</a>
        </div>
      </div>
    </nav>
  `;

  document.getElementById("mobile-menu-btn")?.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  cart.updateCartCount();
}

function initFooter() {
  const footer = document.getElementById("main-footer");
  if (!footer) return;
  footer.innerHTML = `
    <footer class="bg-black border-t border-red-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span class="text-3xl">🍣</span>
              <span class="text-xl font-bold text-white">Sushi<span class="text-red-500">House</span></span>
            </div>
            <p class="text-gray-400 text-sm">Auténtica cocina japonesa con ingredientes frescos y de la mejor calidad.</p>
            <div class="flex gap-4 mt-4">
              <a href="#" class="text-gray-400 hover:text-red-400 transition"><i class="fab fa-facebook text-xl"></i></a>
              <a href="#" class="text-gray-400 hover:text-red-400 transition"><i class="fab fa-instagram text-xl"></i></a>
              <a href="#" class="text-gray-400 hover:text-red-400 transition"><i class="fab fa-tiktok text-xl"></i></a>
              <a href="#" class="text-gray-400 hover:text-red-400 transition"><i class="fab fa-whatsapp text-xl"></i></a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Enlaces</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="text-gray-400 hover:text-red-400 transition">Inicio</a></li>
              <li><a href="products.html" class="text-gray-400 hover:text-red-400 transition">Productos</a></li>
              <li><a href="about.html" class="text-gray-400 hover:text-red-400 transition">Nosotros</a></li>
              <li><a href="contact.html" class="text-gray-400 hover:text-red-400 transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Información</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="privacy.html" class="text-gray-400 hover:text-red-400 transition">Políticas de Privacidad</a></li>
              <li><a href="terms.html" class="text-gray-400 hover:text-red-400 transition">Términos y Condiciones</a></li>
              <li><a href="profile.html" class="text-gray-400 hover:text-red-400 transition">Mi Perfil</a></li>
              <li><a href="cart.html" class="text-gray-400 hover:text-red-400 transition">Carrito</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Contacto</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><i class="fas fa-map-marker-alt mr-2 text-red-500"></i>Av. Providencia 123, Región Metropolitana</li>
              <li><i class="fas fa-phone mr-2 text-red-500"></i>+56 2 2345 6789</li>
              <li><i class="fas fa-envelope mr-2 text-red-500"></i>info@sushihouse.cl</li>
              <li><i class="fas fa-clock mr-2 text-red-500"></i>Lun-Dom: 12:00 - 22:00</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 SushiHouse. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}

function renderStars(rating, interactive = false, productId = null) {
  let html = '<div class="flex gap-1">';
  for (let i = 1; i <= 5; i++) {
    if (interactive) {
      html += `<button type="button" class="star-btn text-2xl ${i <= rating ? 'text-yellow-400' : 'text-gray-600'} hover:text-yellow-400 transition" data-rating="${i}" data-product-id="${productId}">
        <i class="fas fa-star"></i>
      </button>`;
    } else {
      html += `<i class="fas fa-star ${i <= rating ? 'text-yellow-400' : 'text-gray-600'}"></i>`;
    }
  }
  html += '</div>';
  return html;
}

function renderProductCard(product) {
  return `
    <div class="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group">
      <a href="product-detail.html?id=${product.id}" class="block relative overflow-hidden">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
        ${product.popular ? '<span class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">Popular</span>' : ''}
      </a>
      <div class="p-4">
        <div class="flex items-center gap-1 mb-2">
          ${renderStars(Math.round(product.rating))}
          <span class="text-gray-400 text-sm ml-1">(${product.reviews})</span>
        </div>
        <a href="product-detail.html?id=${product.id}">
          <h3 class="text-white font-bold text-lg mb-1 hover:text-red-400 transition">${product.name}</h3>
        </a>
        <p class="text-gray-400 text-sm mb-3 line-clamp-2">${product.description}</p>
        <div class="flex items-center justify-between">
          <span class="text-red-400 font-bold text-xl">$${product.price.toLocaleString('es-CL', { maximumFractionDigits: 0 })}</span>
          <button onclick="cart.addItem(${product.id})" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition text-sm font-semibold">
            <i class="fas fa-plus mr-1"></i> Agregar
          </button>
        </div>
      </div>
    </div>
  `;
}

function getUrlParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function getStatusBadge(status) {
  const colors = {
    "Entregado": "bg-green-600/20 text-green-400 border-green-600",
    "En camino": "bg-blue-600/20 text-blue-400 border-blue-600",
    "Preparando": "bg-yellow-600/20 text-yellow-400 border-yellow-600",
    "Cancelado": "bg-red-600/20 text-red-400 border-red-600"
  };
  const color = colors[status] || "bg-gray-600/20 text-gray-400 border-gray-600";
  return `<span class="px-3 py-1 rounded-full text-xs font-bold border ${color}">${status}</span>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initFooter();
});
