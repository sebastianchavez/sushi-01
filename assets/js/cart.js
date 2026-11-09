class ShoppingCart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
  }

  save() {
    localStorage.setItem("cart", JSON.stringify(this.items));
    this.updateCartCount();
  }

  addItem(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.items.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }
    this.save();
    this.showNotification(`${product.name} agregado al carrito`);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.save();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.save();
      }
    }
  }

  clear() {
    this.items = [];
    this.save();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
      const count = this.getItemCount();
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? "flex" : "none";
    }
  }

  showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in";
    notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("animate-fade-out");
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  renderCartPage() {
    const cartContainer = document.getElementById("cart-items");
    const cartSummary = document.getElementById("cart-summary");

    if (this.items.length === 0) {
      cartContainer.innerHTML = `
        <div class="text-center py-16">
          <i class="fas fa-shopping-cart text-6xl text-gray-600 mb-4"></i>
          <h3 class="text-2xl font-bold text-gray-300 mb-2">Tu carrito está vacío</h3>
          <p class="text-gray-400 mb-6">Agrega productos para comenzar tu pedido</p>
          <a href="products.html" class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Ver productos
          </a>
        </div>
      `;
      cartSummary.innerHTML = "";
      return;
    }

    cartContainer.innerHTML = this.items.map(item => `
      <div class="bg-gray-800 rounded-lg p-4 flex items-center gap-4" data-product-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg">
        <div class="flex-1">
          <h3 class="text-white font-bold text-lg">${item.name}</h3>
          <p class="text-red-400 font-semibold">$${item.price.toLocaleString('es-CL', { maximumFractionDigits: 0 })}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" class="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition">
            <i class="fas fa-minus text-sm"></i>
          </button>
          <span class="text-white font-semibold w-8 text-center">${item.quantity}</span>
          <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" class="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center transition">
            <i class="fas fa-plus text-sm"></i>
          </button>
        </div>
        <div class="text-right">
          <p class="text-white font-bold text-lg">$${(item.price * item.quantity).toLocaleString('es-CL', { maximumFractionDigits: 0 })}</p>
          <button onclick="cart.removeItem(${item.id})" class="text-red-400 hover:text-red-300 transition mt-2">
            <i class="fas fa-trash"></i> Eliminar
          </button>
        </div>
      </div>
    `).join("");

    const subtotal = this.getTotal();
    const shipping = 5000;
    const total = subtotal + shipping;

    cartSummary.innerHTML = `
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-white text-xl font-bold mb-4">Resumen del pedido</h3>
        <div class="space-y-2 mb-4">
          <div class="flex justify-between text-gray-300">
            <span>Subtotal</span>
            <span>$${subtotal.toLocaleString('es-CL', { maximumFractionDigits: 0 })}</span>
          </div>
          <div class="flex justify-between text-gray-300">
            <span>Envío</span>
            <span>$${shipping.toLocaleString('es-CL', { maximumFractionDigits: 0 })}</span>
          </div>
          <div class="border-t border-gray-700 pt-2 mt-2">
            <div class="flex justify-between text-white text-xl font-bold">
              <span>Total</span>
              <span>$${total.toLocaleString('es-CL', { maximumFractionDigits: 0 })}</span>
            </div>
          </div>
        </div>
        <a href="checkout.html" class="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition">
          Proceder al pago
        </a>
        <a href="products.html" class="block w-full bg-gray-700 hover:bg-gray-600 text-white text-center py-3 rounded-lg font-semibold transition mt-2">
          Seguir comprando
        </a>
      </div>
    `;
  }
}

const cart = new ShoppingCart();
