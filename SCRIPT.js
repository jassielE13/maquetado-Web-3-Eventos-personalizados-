document.addEventListener('DOMContentLoaded', () => {
    // Evento para agregar producto al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.getAttribute('data-product'); // nombre del producto
            const productPrice = event.target.getAttribute('data-price'); // precio del producto
            const productId = event.target.id; // ID del botón
            const productQuantity = 1; // Cantidad inicial

            // Guardar en localStorage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: productQuantity
            };

            // Verificar si el producto ya está en el carrito
            const existingProductIndex = cart.findIndex(item => item.id === productId);

            if (existingProductIndex > -1) {
                // Si el producto ya está, aumentar la cantidad
                cart[existingProductIndex].quantity += 1;
            } else {
                // Si es un nuevo producto, añadirlo al carrito
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`Producto ${productName} agregado al carrito por $${productPrice}`);
        });
    });

    // Evento para ver detalles del producto
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productDescription = event.target.getAttribute('data-description');
            alert(`Descripción del producto: ${productDescription}`);
        });
    });

    // Evento para cambiar tema
    const themeToggleButton = document.getElementById('toggle-theme'); // Botón para cambiar tema
    const bodyElement = document.body; // El elemento body al que le cambiarás el tema

    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        bodyElement.classList.add(savedTheme);
    }

    // Evento para cambiar el tema
    themeToggleButton.addEventListener('click', () => {
        // Alternar entre temas (claro y oscuro)
        if (bodyElement.classList.contains('dark-theme')) {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
            alert('Has cambiado al tema claro.');
        } else {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            alert('Has cambiado al tema oscuro.');
        }
    });

    // Evento 1: Cambiar el contenido de un párrafo al hacer clic en "Agregar Carrito"
    document.getElementById('add-to-cart-1').addEventListener('click', () => {
        alert('Producto agregado al carrito: Galleta Oreo');
    });

    // Evento 2: Cambiar el color de fondo de un div al pasar el mouse por encima
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = '#f7ff14'; // Cambia el color de fondo al pasar el mouse
        });
        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = ''; // Restaura el color original al salir el mouse
        });
    });

    // Evento 3: Capturar la tecla presionada en el campo de búsqueda
    document.querySelector('#search-form input').addEventListener('keyup', (event) => {
        console.log(`Tecla presionada: ${event.key}`);
    });
    document.querySelector('#search-form input').addEventListener('input', (event) => {
        console.log(`Texto actual: ${event.target.value}`);
    });
    
});

  



