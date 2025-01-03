// Initialize cart with items from localStorage, if available
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
    updateCartIcon();
    showPopupMessage(`${product.name} added to cart!`); // Show product name in popup
}

// Function to update the cart icon
function updateCartIcon() {
    const cartCount = document.getElementById("cartCount"); // Get the count span
    if (cartCount) {
        cartCount.textContent = `(${cart.length})`; // Update the count
    }
}

// Function to show a popup message
function showPopupMessage(message) {
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}

// Event listeners for Add to Cart buttons
document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
        // Get product details from data attributes
        const product = {
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image,
        };

        // Use SweetAlert for feedback
        Swal.fire({
            title: 'Added to Cart!',
            text: `${product.name} has been added to your cart.`,
            icon: 'success',
            confirmButtonText: 'View Cart',
            showCancelButton: true,
            cancelButtonText: 'Continue Shopping'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to cart page if confirmed
                window.location.href = 'cart.html';
            }
        });

        // Add product to cart after the alert
        addToCart(product);
    });
});

// Initial icon update to display existing cart count on page load
updateCartIcon();
