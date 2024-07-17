$(document).ready(function () {
    var contador = 1;
    $('.menu_bar').click(function (e) {
        e.preventDefault();
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            $('nav').animate({
                left: '-100%'
            });
            contador = 1;
        }
    });

    // Mostrar productos al cargar la página
    showProducts();
});


// Ejemplo de productos
const products = [
    { id: 1, name: 'Laptop HP', price: 100, image: 'images/1.jpg' },
    { id: 2, name: 'Smartwach Samsung', price: 200, image: 'images/2.jpg' },
    { id: 3, name: 'RAM XPG', price: 300, image: 'images/3.jpg' },
    { id: 4, name: 'Mouse Razer', price: 200, image: 'images/4.jpg' },
    { id: 5, name: 'SSD NVME Adata', price: 100, image: 'images/5.jpg' },
    { id: 6, name: 'Teclado mecanico Razer', price: 200, image: 'images/11.jpg' },
    { id: 7, name: 'MB Asrock', price: 300, image: 'images/12.jpg' },
    { id: 8, name: 'RTX 3060ti GIGABYTE', price: 200, image: 'images/13.jpg' },
    { id: 9, name: 'All in one Corsair', price: 100, image: 'images/14.jpg' },
    { id: 10, name: 'AG620 Deepcool', price: 200, image: 'images/15.jpg' },
    { id: 11, name: 'Intel Core I7', price: 300, image: 'images/16.png' },
    { id: 12, name: 'RTX 4060ti Asus TUF', price: 300, image: 'images/17.jpg' }
];

const cart = [];

// Función para mostrar productos
function showProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        `;
        productList.appendChild(productItem);
    });
}

// Función para añadir productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} añadido al carrito`);
    showCart();
}

// Función para mostrar el carrito
function showCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Precio: $${item.price}</p>
        `;
        cartItems.appendChild(cartItem);
    });
    updateTotal();
}

// Función para actualizar el total del carrito
function updateTotal() {
    const totalElement = document.getElementById('total');
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = total.toFixed(2);
}

// Función para manejar el formulario de login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username === 'admin' && password === '1234') {
        alert('Login exitoso');
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

// Función para buscar productos
function searchProducts() {
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    showProducts(filteredProducts);
}

// Función para toggle de menú (para versión móvil)
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Iniciar mostrando los productos
document.addEventListener('DOMContentLoaded', () => {
    showProducts();
    document.querySelector('.search-bar input').addEventListener('input', searchProducts);
    document.getElementById('login-form').addEventListener('submit', handleLogin);
});

// Función para toggle de menú (para versión móvil)
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
});
$(document).ready(function(){
    $('.carousel').slick({
        dots: true, // Muestra puntos de navegación
        infinite: true, // Ciclo infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Mostrar una diapositiva a la vez
        adaptiveHeight: true, // Altura adaptativa
        autoplay: true, // Reproducción automática
        autoplaySpeed: 3000 // Velocidad de reproducción automática
    });
});



