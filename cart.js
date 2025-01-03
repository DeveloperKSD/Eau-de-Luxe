// Retrieve cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart items
function displayCartItems() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = ""; // Clear existing items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p class='empty-message'>Your cart is empty!</p>";
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        // Create and style each part of the cart item
        const itemImage = document.createElement("img");
        itemImage.src = item.image || "Assets/default-product.png"; // Placeholder image if no image provided
        itemImage.alt = item.name;
        itemImage.classList.add("cart-item-image");

        const itemDetails = document.createElement("div");
        itemDetails.classList.add("cart-item-details");

        const itemName = document.createElement("p");
        itemName.classList.add("cart-item-name");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("cart-item-price");
        itemPrice.textContent = `Price: ₹${item.price}`;

        // Append all elements to itemDetails, then itemDiv
        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemDetails);

        // Append the complete itemDiv to the cartItemsDiv
        cartItemsDiv.appendChild(itemDiv);
    });
}

// Function to clear the cart
function clearCart() {
    cart = []; // Clear the cart array
    localStorage.removeItem("cart"); // Remove from localStorage
    displayCartItems(); // Update display
    updateCartIcon(); // Update cart icon in navbar if needed
}

// Update the cart icon (optional)
function updateCartIcon() {
    const cartIcon = document.getElementById("userCart");
    if (cartIcon) {
        cartIcon.textContent = `Cart (${cart.length})`;
    }
}

// Add event listener for Clear All button
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);

// Add event listener for Checkout button
document.getElementById("checkout-btn").addEventListener("click", () => {
    window.location.href = "checkout.html";
});



// Call display function on page load
displayCartItems();
updateCartIcon();
