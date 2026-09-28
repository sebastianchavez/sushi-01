# SushiHouse - E-commerce de Sushi

Sitio web de comercio electrónico para un restaurante de sushi, desarrollado con HTML, JavaScript nativo y Tailwind CSS.

## Características

- **16 páginas completas** con diseño responsive
- **Catálogo de productos** con filtros por categoría y precio
- **Carrito de compras** funcional con localStorage
- **Sistema de autenticación** (registro, login, recuperación de contraseña)
- **Perfil de usuario** con historial de pedidos
- **Sistema de reseñas** con calificación por estrellas
- **Proceso de checkout** completo con dirección, envío y pago
- **Diseño oscuro/elegante** con acentos en rojo y dorado

## Páginas incluidas

### Principales
- `index.html` - Landing page con hero, productos destacados y categorías
- `products.html` - Catálogo completo con filtros
- `product-detail.html` - Detalle de producto con cantidad y reseñas
- `about.html` - Información de la empresa y equipo
- `contact.html` - Formulario de contacto, horario y ubicación

### Carrito y Checkout
- `cart.html` - Carrito de compras
- `checkout.html` - Proceso de pago (dirección, envío, medio de pago)
- `order-confirmation.html` - Confirmación de pedido con botones de imprimir/historial

### Usuario
- `profile.html` - Perfil con historial de pedidos
- `order-detail.html` - Detalle de pedido específico
- `review.html` - Formulario de reseña con estrellas
- `register.html` - Registro de usuario
- `login.html` - Autenticación
- `forgot-password.html` - Recuperar contraseña

### Legal
- `privacy.html` - Políticas de privacidad
- `terms.html` - Términos y condiciones

## Tecnologías

- **HTML5** semántico
- **Tailwind CSS** (via CDN)
- **JavaScript nativo** (ES6+)
- **Font Awesome** para íconos
- **Google Fonts** (Poppins)
- **localStorage** para persistencia del carrito

## Datos Mockeados

El sitio incluye datos mockeados en `assets/js/data.js`:
- 20 productos de sushi con imágenes de Unsplash
- 6 categorías (Nigiri, Maki, Sashimi, Rolls Especiales, Entradas, Bebidas)
- 3 miembros del equipo
- 8 reseñas de ejemplo
- 5 pedidos de ejemplo
- Usuario mockeado

## Instalación

1. Clona o descarga este repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo! No requiere instalación ni dependencias

## Uso

- Navega entre páginas usando el menú superior
- Agrega productos al carrito desde cualquier página
- El carrito se guarda automáticamente en localStorage
- Los datos mockeados simulan una aplicación real

## Estructura del Proyecto

```
sushi-01/
├── index.html
├── about.html
├── products.html
├── contact.html
├── product-detail.html
├── cart.html
├── checkout.html
├── order-confirmation.html
├── profile.html
├── order-detail.html
├── review.html
├── privacy.html
├── terms.html
├── register.html
├── login.html
├── forgot-password.html
├── README.md
└── assets/
    ├── css/
    │   └── custom.css
    ├── js/
    │   ├── data.js
    │   ├── cart.js
    │   └── main.js
    └── img/
```

## Notas

- Las imágenes provienen de Unsplash (URLs directas)
- El sitio es completamente funcional con datos mockeados
- No requiere backend ni base de datos
- Optimizado para navegadores modernos

## Licencia

Este proyecto es un template de demostración.
